let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*『${pickRandom(global.t7dy)}』*`, m)
}
handler.help = ['bzmzjdks']
handler.tags = ['fun']
handler.command = /تحدي/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.t7dy = [ 
'اضرب نفسك بالكف',
   'قول لاي حد في الجروب احبك',
   'اشرب ملح مع ماء',
   'تشاجر مع احد اعضاء الجروب',
      'تشاجر مع احد المشرفين',
      'قول ل احد المشرفين احبك',
      'غادر الجروب وارجع',
      'قول ل احد الاعضاء اكرهك',
      'اشرب كميه من الماء الساخن',
      'اسهر لمده يوم',
      'لا تاكل لمده يوم',
      'اترك هاتفك لمده ساعتين',
      'اصمت لمده ساعه',
      'امشي لمده نصف ساعه',
 ] 