let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antifake‎حذف && !isAdmin && !isOwner && !isROwner) {
//if (!db.data.chats[m.chat].antifake && m.isGroup) throw 0
let texto = `${ag}هذا العدد *@${m.sender.split`@`[0]}*غير مسموح به في هذه المجموعة!!\n\n*آسف سيتم طردك .. رقمك يبدو مزيفًا إلى حد ما*`

if (m.sender.startsWith('966' || '966')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "966") return 
}

if (m.sender.startsWith('966' || '966')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
