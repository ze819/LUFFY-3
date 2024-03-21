import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/luffy9luffy.mp3'
let chat = global.db.data.chats[m.chat]
if (/^بوت$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true }, { quoted: m })      
}
return !0
}
export default handler
