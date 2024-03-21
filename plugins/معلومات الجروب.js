let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 معلومات الجروب 」*\n

*الوصف :* 
${groupMetadata.desc?.toString() || 'مفي وصف 🐦'}

*عدد الاعضاء:*
${participants.length} المشاركون

*المالك:* 
@${owner.split('@')[0]}

*الادمنز - المشرفين:*
${listAdmin}

*الخيارات:*
❈↲ الترحيب: ${welcome ? '✅' : '❌'}
❈↲ وضع-الاقتران: ${modohorny ? '✅' : '❌'} 
❈↲ الملصقات- التلقائيه: ${autosticker ? '✅' : '❌'} 
❈↲ الصوت: ${audios ? '✅' : '❌'} 
❈↲ المعاداة: ${antiviewonce ? '✅' : '❌'} 
❈↲ مضاد-المزعجين: ${antiToxic ? '✅' : '❌'} 
❈↲ مضاد-الفيرس: ${antiTraba ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogroup']
handler.tags = ['group']
handler.command = /^معلومات-الجروب|الجروب$/i
handler.group = true
export default handler
