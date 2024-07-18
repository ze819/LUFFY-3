let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `تم تغير رابط الجروب بنجاح\nالرابط الجديد: ${'https://chat.whatsapp.com/' + revoke}`, m)}
handler.command = ['revoke', 'رستر', 'ريستارت', 'إعادة'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
