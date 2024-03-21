import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗تنبيه❗]*\n*ريبلي على الصوره الي تبي تحولها pdf*'    
let img = await q.download?.()
let url = await uploadImage(img)    
let docname = text ? text : m.pushName || '*〘 ❖─── ~『𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇』~───❖ 〙*'
conn.sendFile(m.chat, `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=GataDios&img=${url}`, docname + '.pdf', '', m, false, { asDocument: true })
}
handler.help = ["topdf"]
handler.tags = ["pdf"]
handler.command = /^(pdf|ديف|دي-اف)$/i
export default handler
