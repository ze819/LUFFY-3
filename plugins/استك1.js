
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
 let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*[❗تنبيه❗]*\n*ريبلي على الصوره*'
    await conn.reply(m.chat, '*انتضر جار تلبيه طلبك*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})

   if (!/image\/(jpe?g|png)/.test(mime)) throw 'Mime ${mime} غير مدعوم'
  let img = await q.download?.()
  let url = await uploadImage(img)
  let wasted = `https://some-random-api.com/canvas/wasted?avatar=${url}`
  let stiker = await sticker(null, wasted, packname, author)
  conn.sendFile(m.chat, stiker, 'wasted.webp', '', m,true,  { contextInfo: { forwardingScore: 200, isForwarded: false, externalAdReply:{ showAdAttribution: false, title: wm, body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
 } catch (e) {
   m.reply('*[❗تنبيه❗]*\n*ريبلي على الصوره*')
   }
  }

handler.help = ['استك1']
handler.tags = ['استك1']
handler.command = /^استك1$/i

handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler
