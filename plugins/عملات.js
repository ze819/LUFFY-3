//import db from '../lib/database.js'

let handler = async (m, { conn }) => {

  let hasil = Math.floor(Math.random() * 109)
  let time = global.db.data.users[m.sender].lastmiming + 1440000
  if (new Date - global.db.data.users[m.sender].lastmiming < 1440000) throw` *╮───────────────*\n*لقد أخذت عملاتك بالفعل انتظر* \n︎︎${msToTime(time - new Date())}\n*︎╯───────────────╰*`
  global.db.data.users[m.sender].limit += hasil
  m.reply(`*╮───────────────╭*\n*تـم تـجـمـيـع عـمـلاتك*\n*│المبلغ » ${hasil} 🪙*\n*︎╯───────────────╰*`)
  global.db.data.users[m.sender].lastmiming = new Date * 1
}
handler.help = ['amlet']
handler.tags = ['econ']
handler.command = ['عملات'] 

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours +"ساعات" + minutes + "دقائق" + seconds + "ثواني⛔" 
      }