let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗] لاتنسي المنشن يا سيدي لوفـي*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗] لاتنسي المنشن يا سيدي لوفي*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗]تم إلغاء حظر المستخدم*\n*تقدر تستخدم البوت الان*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command =/^loffy|luffy/i
handler.rowner = true
export default handler
