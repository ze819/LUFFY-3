let handler = async (m, { conn, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    try {
      let quotesData = await (await fetch("https://raw.githubusercontent.com/Dark-Man747/worker-bot/main/quote.json")).json()
      const randomIndex = quotesData[Math.floor(Math.random() * quotesData.length)]
      const message = `*يسواهم١⁵:*❄️\n*${randomIndex}*`
  
      await conn.reply(m.chat, message, fkontak,m)
    } catch (e) {
      console.log(e)
      await conn.reply(m.chat, 'حدث خطأ أثناء استرجاع الاقتباس.', fkontak,m)
    }
  }
  handler.command = ['اقتباس','أقتباس','اقتباسات','الاقتباسات']
  handler.tags = ['اقتباس']
  handler.help = ['اقتباس عشوائي']
  export default handler
