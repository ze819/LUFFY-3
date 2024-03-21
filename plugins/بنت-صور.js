import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `${lenguajeGB['smsAvisoFG']()}`
conn.sendFile(m.chat, json.url, 'error.jpg', `*ايـما زوجـتك البـنت ذي🍹*`, m)
//conn.sendButton(m.chat, `😻😻😻😻`, wm, json.url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(ايما-زوجيني|⑧②⑦②)$/i
handler.restrict = true
export default handler
