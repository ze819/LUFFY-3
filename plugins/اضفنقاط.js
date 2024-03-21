//import db from '../lib/database.js'

  let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '\n*──────────────┌*\n*[⚠️ملاحضه⚠️]*\n*منـشـن الشـخـص الـمراد*\n*──────────────┌*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '*ضيف المبلغ الي بدك تحوله*'
  if (isNaN(txt)) throw '*[❗ملاحضه❗]*\n*يجب ان يكون المبلغ رقم*'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '*[❗خطئ❗]*\n*الحد الادنى لتحويل هوا 1 نقطه*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *اضافه نقاط*
*┌──────────────*
*┃❖ إجمالي:* *${xp}*
*└──────────────*`)
 conn.fakeReply(m.chat, `*──────────────┌*\n*•┃❖لقد حصلت على* \n\n *•┃❖+${xp} نقطه*\n*──────────────┌*`, who, m.text )
}
handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['اضفنقاط','اضافه-نقاط'] 
handler.rowner = true

export default handler
