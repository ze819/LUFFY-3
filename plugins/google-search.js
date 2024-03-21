import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗مساعده❗]*\n*اكتب اسم الشخصيه او الصوره الي تريد البحث عنها*`
m.reply("*•┃❖جاري تحميل الصوره يرجى الانتضار...⏳〗*");
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵*`, m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صورة|بحث|صوره)$/i
handler.exp = 20
handler.limit = 1
export default handler
