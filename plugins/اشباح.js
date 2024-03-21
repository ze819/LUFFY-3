let handler = async (m, { conn, text, participants }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
}else{
var sum =text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*هذه المجموعة نشطة وليس فيها أشباح*`,  fkontak,m) 
m.reply(`*[ ⚠ الناس الي متتفاعل خالص ⚠ ]*\n\n*الجروب:* ${await conn.getName(m.chat)}\n*الاعضاء:* ${sum}\n\n*[ ❄️قائمة الأشباح❄️ ]*\n${sider.map(v => '*•┃➥تفاعل⏎* @' + v.replace(/@.+/, '')).join('\n')}\n\n*تــفــــاعـــلـــو*`, null, { mentions: sider,quoted:fkontak })}
handler.command=/^(اشباح|اشباح|الاشباح|sider)$/i

handler.botAdmin = true
export default handler
