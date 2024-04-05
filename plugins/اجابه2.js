let handler = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  conn.tokitoki = conn.tokitoki ? conn.tokitoki : {}
  let id = m.chat
  if (!(id in conn.tokitoki)) throw false
  let json = conn.tokitoki[id][1]
  conn.reply(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```',fkontak, m)
}
handler.command = /اجابه|جواب|مساعده/i
handler.rowner = true


export default handler
