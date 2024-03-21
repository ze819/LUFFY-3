import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/killua.jpg')
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')

let str = `*•┃❖❂━━━━❨♥❩━━━━❂*╟❧
*•┃❖🩵〗الاسم 〖${name}〗*
*•┃❖📧〗المنشن:〖@${who.replace(/@.+/, '')}〗*
*•┃❖☎️〗الرقم:〖${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}〗*
*•┃❖🖇️〗الرابط:〖wa.me/${who.split`@`[0]} 〗* ${registered ? '\n*•┃❖♥️〗العمر:〖' + age + '' : ''}〗*
*•┃❖🚨〗تحذيرات:* *〖${warn}〗*
*•┃❖⚠️〗مسجل:${registered ? '〖يب〗':'〖لا〗'}*
*•┃❖🌟〗بريميام:${prem ? '〖يب〗' : '〖لا〗'}*
*•┃❖❂━━━━❨♥️❩━━━━❂*╟❧`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, fkontak, false, { mentions: [who] })


}
handler.help = ['perfil']
handler.tags = ['group']
handler.command = ['بروفايل', 'بروفايلي','حسابي'] 

export default handler
