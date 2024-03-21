import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*[❗تحذير❗]*\n *أدخل رقمك التسلسلي اذا لا تتذكره اكتب.رمزي*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*[❗تحذير❗]*\n*رقمك التسلسلي خطأ يرجي التأكد منه و أعاده المحاوله*\n\n*يمكنك استخدام امر .رمزي*'
user.registered = false
m.reply(`*[✔] تمت المهمه بنجاح لم تعد مسجل عندي☑️*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^تسجيلخروج$/i
handler.register = true
export default handler