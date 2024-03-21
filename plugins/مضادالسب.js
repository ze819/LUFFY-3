// manden porno test 
let linkRegex = /كسمك|عرص|معرص|طيزك|طيز|قحبه|معرصين|مخنوث|مخنث|مخنثين/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
let user = `@${m.sender.split`@`[0]}`
const isGroupLink = linkRegex.exec(m.text)
if (chat.Antilink1 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await this.sendMessage(m.chat, { text: `*「⚠️تنبيه⚠️」*\n*مضادالسب مفعل يا ${user}لقد كسرت قوانين المجموعه سيتم ابادتك من المجموعه حاليا ياعزيزي*`, mentions: [m.sender] })  
if (!isBotAdmin) return m.reply('*[❗تحذير❗]*\n*مضاد السب مفعل ارفع البوت ادمن ل ازاله مخالفين قانون الجروب*')
//await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝙷𝙰𝚂𝚃𝙰 𝙻𝙰 𝚅𝙸𝚂𝚃𝙰 𝙱𝙰𝙱𝚈 👋, ${await this.getName(m.sender)} 𝚁𝙾𝙼𝙿𝙸𝚂𝚃𝙴𝚂 𝙻𝙰𝚂 𝚁𝙴𝙶𝙻𝙰𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙴𝚁𝙰𝚂 𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽, 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚁 𝙰 𝙻𝙰𝚂 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝚂*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return
} else if (!bot.restrict) return m.reply('*[❗تنبيه❗]*\n*ليس  لديي الاذن في الطرد كلم المطور يقوم باغلاق القيود عن هاذي المجموعه*')
}
return !0  
}
