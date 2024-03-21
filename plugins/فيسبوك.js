import fetch from 'node-fetch'
import api from 'hxz-api'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*[❗ملاحضه❗]*:\n*هات الرابط الخاص بالفيديو المراد تحميل من فيسبوك مثال*\n*${usedPrefix+command} https://vt.tiktok.com/ZSFDMyckv/*`
let f = await api.fbdown(text)
await conn.sendMessage(m.chat, { react: { text: "🎥",key: m.key,}
  })
await m.reply( `*_⌛جاري التحميل▰▰▰▱▱▱▱▱⏳_*` )
let hasil = `*𝑀𝛩𝑁𝐾𝐸𝑌『 𝐷』𝐿𝑈𝐹𝐹𝑌*`
conn.sendFile(m.chat, f.Normal_video, 'fbmp4', hasil, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.command = /^فيسبوك|فيس|facebook$/i
export default handler
