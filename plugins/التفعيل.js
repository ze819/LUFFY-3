//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `⚠️ *أنت مسجل بالفعل*\n*هل ترقب في إعاده التسجيل*\n\n*استخدم امر تسجيل-خروج ثم الرقم التسلسي لطلب الرقم اكتب .رمزي☑️*${usedPrefix}`
  if (!Reg.test(text)) throw `*⚠️ تنسيق غير صحيح*\n\n*استخدم هذا الأمر: ${usedPrefix + command} اسم.عمر*\n📌 مثال: *${usedPrefix + command}* ${name2}.21`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*يجب ادخال اسمك📛*'
  if (!age) throw '*يجب ادخال العمر📛*'
  if (name.length >= 30) throw '*الاسم طويل يجب تقصير الاسم📛*'
  age = parseInt(age)
  if (age > 100) throw '*جدو وتبي تلعب مع بنت صغيره متلي🚺*'
  if (age < 5) throw `*طفل تبي رضاعه؟🚼🍼*`
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*أكملت تسجيل*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *•┃❖الاسم*:*${name}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *•┃❖العمر:${age}سنه*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *المحفظه* 
┆ *•┃❖الــمـــــــاس:💎┃${user.diamond}*
┆ *•┃❖ــمـــــلات؏:🪙┃${user.limit}*
┆ *•┃❖جــــرعـــات:🏥┃${user.money}*
┆ *•┃❖لوفي كوينز:💰┃${user.money}*
╰──────────────────

*${usedPrefix}لعرض القائمه اكتب .بروفايلي☀️*
`.trim())
}

handler.help = ['reg'].map(v => v + ' <الاسم.العمر>')
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'تفعيل', 'التفعيل','تسجيل']

export default handler
