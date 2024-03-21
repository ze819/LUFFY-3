import * as baileys from '@whiskeysockets/baileys'

let handler = async (m, { conn, text }) => {
	let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
	if (!code) throw '*⚠️ أدخل رابط الجـروب*'
	let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
		data = extractGroupMetadata(res),
		txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n'),
		pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error)
		let groupinfo = `
*┏━━━━━━━━━━━━━━━┓*
*┃🍹 ⫹⫺ المعرف:* ${data.id}◞
*┃🧪 ⫹⫺ الاسم:* ${data.subject}
*┃📅 ⫹⫺ التاريخ:* ${data.creation}
*┃👑 ⫹⫺ المالك:* ${data.owner}
*┗━━━━━━━━━━━━━━━┛*
`
	await conn.reply(m.chat, groupinfo, m)
	const botones = [
{index: 1, urlButton: {displayText: `نسخ الوصف🍹`, url: `https://www.whatsapp.com/otp/copy/${data.desc}`}},
]
await conn.sendMessage(m.chat, { text: `*┏━━━━━━━━━━━━━━┓*\n┃هل تريد نسخ الوصف ؟ •🍷\n*┗━━━━━━━━━━━━━━┛*`, templateButtons: botones, footer: wm })
}
handler.command = /^(فحص)$/i

export default handler
handler.owner = false

const extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'America/Los_Angeles' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
		desc
	}
	return metadata
}
