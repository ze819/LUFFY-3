let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ خطأ ⚠️ ] الرابط غلط او مش موجود*\n*👉🏻 حط رابط الجروب*\n\n*مثال:*\n*.انضم https://chat.whatsapp.com/JbjzD8qwsPHHFXhtlzrgnn*\n\n*[❗] لا ترد على أي رسالة قد تتسبب في حدوث تداخل ، اكتبها كرسالة جديدة فقط*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*تم انضمام البوت الي الجروب بنجاح ارجوا احترامه وعدم سبه ,استمتعوا به! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗] طلب بوت جديد لمجموعة [❗]*\n\n*—◉ رقم مقدم الطلب:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ رابط المجموعة المطلوب فيها البوت:* ' + link, jid)

await m.reply('*[❗] تم إرسال ارتباط مجموعتك إلى المطور الخاص بي*\n\n*👉🏻 ستكون مجموعتك قيد التقييم وسيقرر مالك / البوت ما إذا كان سيضيفني أم لا*\n\n*[❗] بعض أسباب رفض طلبك هي:*\n*1.- البوت مشبع (فجروبات كتير )*\n*2.- تم طرد البوت من قبل*\n*3.- تم تغير رابط المجموعة*\n*4.-يتم اضافة البوت الي المجموعات بقرار المالك*\n\n*👉🏻 ضع في اعتبارك أن طلبك للانضمام إلى الروبوت في مجموعة قد يستغرق ساعات أو أيام حتى يتم الرد عليه ، تحلى بالصبر*')}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^انضم$/i
handler.rowner = true
export default handler
