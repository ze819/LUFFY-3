let handler = async (m, { conn }) => {
let vn = './media/luffy1.ania.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/7ed61598a89ddcf151474.mp4'),
}), 'error.png', '', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['شاذ']
handler.tags = ['maker']
handler.handler = /^(اوتشيها)$/i
export default handler
