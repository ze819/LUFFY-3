import fs from  'fs' 
import fetch from  'node-fetch' 
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let img = "https://wa.me/967733707084"
let info = `*اليك رقم مطوري اضغط على الصور👒*`
await conn.reply(m.chat, info, m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title:  `${ucapan()}` , body: `𝑀𝐴𝐾𝐸𝑀𝐴-𝐵𝛩𝑇١⁵`, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}
handler.customPrefix =/(المطور|ألمطور|مطور|المطورر)/i
handler.command = new RegExp

export default handler

function ucapan() {
  const time = moment.tz('Morocco/Khouribga').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 11) {
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
