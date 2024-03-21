import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!m.quoted) throw '*قم بالرد على الملصق الذي تريد إضافة حزمة إليه*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*قم بالرد على الملصق الذي تريد إضافة حزمة إليه*'
await conn.reply(m.chat, '*جار عمل حقوق الى الملصق...*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nnn,thumbnail: '' }}})
let img = await m.quoted.download()
if (!img) throw '*امنح الملصق الذي تريده لإضافة حزمة واسم*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m,true,  { contextInfo: { forwardingScore: 200, isForwarded: false, externalAdReply:{ showAdAttribution: false, title: wm, body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
else throw '* ، شيء ما خاطئ ..تحقق من أنك استجابت لملصق وأضفت اسم حزمة واسم حزمة*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^سرقه|حقوق$/i
export default handler
