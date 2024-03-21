let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < ) throw
//import db from '../lib/database.js'

const free = 7000
const prem = 2000

let handler = async (m, {conn, isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 864
  if (new Date - global.db.data.users[m.sender].lastclaim < 864) throw `🎁 *لقد تلقيت هديتك اليوميه بالفعل*\n\n🕚 انتظر    *${msToTime(time - new Date())}* `
  let img = 'https://telegra.ph/file/58d769430dc1d5edf8ed2.png'
let dia = global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`
 *مبروك هديتك اليوميه مقدمه من ايما♥️✨*

▢ *لقد حصلت علي:*
🆙 *اكسبي* : +${isPrems ? prem : free}`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['XVXBSN']
handler.tags = ['XVXVX']
handler.command = ['XCXXV', 'vxxnxbxbxbbzjsns'] 

export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " ساعات " + minutes + " دقائق"
}
