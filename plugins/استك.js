import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {
      conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "*مثال*\n*استك لوفي🍹*"
  
       if (!text) return m.reply('*النص فين يحب ؟*')
  
   if (text.length > 30) return m.reply('اخرك 30 حرف ياحب')
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6e3a66575435d79f9342e.png')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#000000",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m,true,  { contextInfo: { forwardingScore: 200, isForwarded: false, externalAdReply:{ showAdAttribution: false, title: wm, body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(sticker|استك)$/i

export default handler
