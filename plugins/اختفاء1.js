let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗معلومه❗] المستخدم ${conn.getName(m.sender)} سيكون غير نشط (🍹), من فضلك لا تمنشن*\n\n*—◉ سبب الاختفاء (🍹)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^اختفاء|الاختفاء|افك|afk$/i
export default handler