import fetch from 'node-fetch'
import api from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
 if (!args[0]) throw `*[❗ملاحضه❗]*:\n*هات الرابط الخاص بالفيديو المراد تحميل مثال*\n*${usedPrefix+command} https://vt.tiktok.com/ZSFDMyckv/*`

let f = await api.tiktok(text)
await conn.sendMessage(m.chat, { react: { text: "🎥",key: m.key,}
  })  
  await m.reply('*_⌛جاري التحميل▰▰▰▱▱▱▱▱⏳_*')
 let cap = `*┌⊷〘ا𝑀𝛩𝑁𝐾𝐸𝑌『 𝐷』𝐿𝑈𝐹𝐹𝑌〙*
 
*•┃❖اسم الحساب:* *${f.nickname}*
*•┃❖مده الفيديو:* *${f.duration}*
*•┃❖وصف الفيديو:* *${f.description}*
*└──────────────────*`

conn.sendFile(m.chat, f.play, 'ttmp4', cap, m)
}
handler.help = ['tiktok2', 'tt2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(تيك|تيكتوك|tiktok|tik)$/i
handler.limit = true
export default handler
