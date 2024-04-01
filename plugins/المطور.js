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
let videoUrl = 'https://telegra.ph/file/d72ece303f4649feffd11.mp4'
let str = `
*━────────── ❄️ ──────────━*
*•┃❖💫〗اهلا بك يا"${user.name}"*
*•┃❖💫〗وقت التشغيل❰${uptime}❱*
*•┃❖💫〗الوقت❰${wib}❱*
*•┃❖💫〗التاريخ❰${date}❱*
*•┃❖💫〗اليوم❰${week}❱*
*•┃❖💫〗الاصدار❰v4.5❱*

*•┃❖لقب المطور❄️〗❰𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒐𝒇𝒇𝒚١⁵❱*
*•┃❖المطور❄️〗*
*ا〚 wa.me/967733707084 〛*
*•┃❖جروب بوت ماكيما①❄️〗ا*
*〚ا https://chat.whatsapp.com/BRQ5LHQZekDE0K4vi88L15 〛*
*•┃❖جروب بوت ماكيما②❄️〗ا*
*〚ا https://chat.whatsapp.com/CtATAFF2ADN0jwyELpAKda 〛*
*•┃❖جروب بوت لوفي❄️〗ا*
*〚ا https://chat.whatsapp.com/HLhPod7QRd37q0vMcuPkba 〛*
*•┃❖ فروع نشر مفتوح②❄️〗ا*
*〚ا https://chat.whatsapp.com/HvzAMpGqhI19zOYagxj7VH 〛*
*•┃❖ قناتي يوتيوب❄️〗ا*
*〚ا https://youtube.com/@z_em_9?si=Rm32akaKFlxfDKEU 〛*
*•┃❖قناتي واتساب❄️〗ا*
*〚ا https://whatsapp.com/channel/0029VaQ12JyLY6d1PdN5r93a 〛*
      *~.⪻⫷_𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇_⫸≫.~*
*━────────── ❄️ ──────────━*`
                                    


 conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['المطور', 'مطور', 'الدعم', 'سورس'] 
export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
  const time = moment.tz('Morocco/Khouribga').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
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
