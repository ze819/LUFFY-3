import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users))throw`✳️ 
المستخدم مفقود من قاعدة البيانات الخاصة بي`
let videoUrl = 'https://telegra.ph/file/c1c21027a0b1d4575534c.mp4'
let str = `*━ ── • 🕋 • ── ━*
*🌸إن الـلـه و مـلـائـكـتـه يـصـلـون عـلـي الـنـبـي يـا ايـهـا الـذيـن امـنـوا صلـوا عـلـيـه و سـلـمـوا تسـلـيـمٱ🌸*
  *━ ── • 🕋 • ── ━* 
*•┃❖👤〗اهلا بك يا"${user.name}"*
*•┃❖🤖〗اسم البوت〖𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇〗*
*•┃❖💻〗المنصه〖𝑅𝐸𝑃𝐿𝐼𝑇〗*
*•┃❖👥〗المستخدمين〖${Object.keys(global.db.data.users).length}〗*
*•┃❖⏳〗وقت التشغيل〖${uptime}〗*
*•┃❖📆〗التاريخ〖${date}〗*
*•┃❖⌚〗التوقيت〖${wib}〗*
*•┃❖🧭〗اليوم〖${week}〗*
*•┃❖💞〗الاصدار〖v4.0〗*
*•┃❖🔥〗لطلب الاوامر اكتب〖.المهام〗*
                 *~.⪻⫷_𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇_⫸≫.~*`


	
await conn.sendMessage(m.chat, {
   react: {
 text: "📁",
 key: m.key,
   }
  })

conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['اوامر', 'الاوامر', 'diamond', 'أوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
