import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) throw '*فين الرابط*\n*ضيف رابط*'
await conn.reply(m.chat, '*جار تقصير الرابط...*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*[❗] خطأ اتاكد انك حطيت رابط *`
let done = `*✅تم تنفيذ المهمه بنجاح!!*\n\n*الرابط قبل التقصير:*\n${text}\n*الرابط بعد التقصير:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|تصغير|قص|تقصير)$/i
handler.limit = 1
handler.register = true
handler.fail = null
export default handler





