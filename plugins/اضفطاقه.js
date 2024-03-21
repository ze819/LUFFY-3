//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '\n*──────────────┌*\n*[❗ملاحضه❗]*\n*منـشـن الشـخـص الـمراد*\n*──────────────┌*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw'أدخل المبلغ * الحد * الذي تريد إضافته'
    if (isNaN(txt)) throw '*[❗ملاحضه❗]*\n*يجب ان يكون مبلغ الطاقه رقم*'
    let tok = parseInt(txt)
    let joincount = tok
    
    if (joincount < 1) throw '*[❗خطئ❗]*\n*الحد الادنى لتحويل هوا 1 طاقه⚡*'
    let users = global.db.data.users
   users[who].joincount += tok

    await m.reply(`*≡إضافة طاقه*⚡
*──────────────┌*
*┃❖ إجمالي الطاقه⚡:* ${tok}
*──────────────」*`)
   conn.fakeReply(m.chat, `*──────────────┌*\n*•┃❖يحصل على كميه من الطاقه*⚡
\n*•┃❖إجمالي الاستلام+: ${tok}⚡*\n*──────────────」* `, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi', `اضفطاقه`] 
handler.rowner = true

export default handler

