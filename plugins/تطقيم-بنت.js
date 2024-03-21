import fetch from "node-fetch"
let handler = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let data = await (await fetch('https://raw.githubusercontent.com/Afghhjjkoo/GURU-BOT/main/lib/miku54.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*تطقيم ل بنت🌸*\n\n*〘 ❖─── ~『𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇』~───❖ 〙*',fkontak ,m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*تطقيم ل بنت🌸*\n\n*〘 ❖─── ~『𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇』~───❖ 〙*',fkontak ,m)
}
handler.help = ['Miku bot']
handler.tags = ['Miku bot']
handler.command = /^تطقيم-بنت|تطقيم-بنات$/i
handler.limit = true

export default handler
