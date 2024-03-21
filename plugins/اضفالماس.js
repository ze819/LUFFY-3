//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '\n*──────────────┌*\n*[❗ملاحضه❗]*\n*منـشـن الشـخـص الـمراد*\n*──────────────┌*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw'أدخل المبلغ * الحد * الذي تريد إضافته'
    if (isNaN(txt)) throw '*[❗ملاحضه❗]*\n*يجب ان يكون مبلغ الالماس رقم*'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '*[❗خطئ❗]*\n*الحد الادنى لتحويل هوا 1 الماس💎*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`*≡إضافة الماس*💎
*──────────────┌*
*┃❖ إجمالي:* ${dmt}
*──────────────」*`)
   conn.fakeReply(m.chat, `*──────────────┌*\n*•┃❖يحصل على كميه من الالماس*💎
\n*•┃❖إجمالي الاستلام+: ${dmt}💎*\n*──────────────」* `, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi', `اضفالماس`] 
handler.rowner = true

export default handler

