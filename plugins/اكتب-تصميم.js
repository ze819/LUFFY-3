import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let response = args.join(' ').split('|')
  if (!args[0]) throw '*تدلل اش اكتب لك ياشيطاني الصغير*'
  await conn.reply(m.chat, '*جار تلبيه طلبك....*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: 'انضم الى جروب البوت', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nnn,thumbnail: '' }}})
  let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${response[0]}`
  conn.sendFile(m.chat, res, 'Noureddine.jpg', ` *〘𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒐𝒇𝒇𝒚١⁵〙*`, m, false)
}
handler.help = ['flaming1'].map(v => v + ' <text>')
handler.tags = ['maker','logo']
handler.command = /^(تصميم|اكتبي|اكتب)$/i
export default handler
