let handler = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/6aac08396f9d8e9f2f7e3.jpg')
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/gay', {
    avatar: pp, 
  }), 'gay.png', `*هــل انــت 🏳‍🌈 يــا ${name}*\n\n*𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇*`,fkontak ,m)
}

handler.help = ['gay @user']
handler.tags = ['fun']
handler.command = ['ب8','بروفايلي8','بروفايل8'] 

export default handler