import fetch from 'node-fetch';
import { Sticker, createSticker, StickerTypes } from "wa-sticker-formatter";

import fs from 'fs';
import os from 'os';
import path from 'path';

let handler = async (m, { conn, text }) => {
  

  try {
   if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.`;
  }
    if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in global.db.data.users)) throw '*المستخدم ليس في قاعده البيانات الخاصه بي*';
     let userPfp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/01942e650a8b6564e8aba.jpg'); 
    let user = global.db.data.users[who];
    let { name } = global.db.data.users[who];

    

    let quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 1800,
      height: 200, // Adjust the height value as desired
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: name,
            photo: {
              url: userPfp,
            },
          },
          text: text,
          replyMessage: {},
        },
      ],
    };

   let res = await fetch('https://bot.lyo.su/quote/generate', {
  method: 'POST',
  body: JSON.stringify(quoteJson),
  headers: { 'Content-Type': 'application/json' },
});

if (!res.ok) {
  throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
}

let json = await res.json();

if (!json.result || !json.result.image) {
  throw new Error('​​​​​​​​​​​​​​​​​​​​​*حصل خطاء غير متوقع');
}
function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

let bufferImage = Buffer.from(json.result.image, 'base64');


    
    let tempImagePath = path.join(os.tmpdir(), 'tempImage.png');
    fs.writeFileSync(tempImagePath, bufferImage);
    let sticker = new Sticker(tempImagePath, {
      pack: global.packname,
      author: name,
      type: StickerTypes.FULL,
      categories: ["🤩", "🎉"],
      id: randomId(),
      quality: 100,
      background: "#00000000",
    });
    
    try {
      await conn.sendMessage(m.chat, await sticker.toMessage(), { quoted: m });
    } catch (stickerError) {
      console.error('Error sending sticker:', stickerError);
      m.reply('*حدث خطأ أثناء إرسال الملصق. إرسال صوره بدلا من ذلك*');
      
      await conn.sendFile(m.chat, tempImagePath, 'quote.png', 'Here is the quote image:', m);
    }


    fs.unlinkSync(tempImagePath);

    

  } catch (e) {
    console.error(e);
    
  }
};

handler.help = ['quote'];
handler.tags = ['fun'];
handler.command = ['ستك'];

export default handler;
