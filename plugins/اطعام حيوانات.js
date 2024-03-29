import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let vn = './media/luffy9luffy.mp3'
let chat = global.db.data.chats[m.chat]
if (/ملك القراصنه$/i.test(m.text) && chat.audios) {  
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true }, { quoted: fkontak })}


if (/^إيتاشي|أيتاشي|ايتاشي$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy.itashi.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true }, { quoted: fkontak })}



if (/^بوت|بووت|بوووت|بووووت/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = 'https://telegra.ph/file/2acb8a60680151c16a808.jpg'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', `*اسمي لوفي لعرض الاوامر اكتب .اوامر*`, fkontak); };

  

if (/^انيا|انياا|انيااا$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy1.ania.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '7162', ptt: true }, { quoted: fkontak })}



if (/^مللل|ممللللل|ملللللللل|ملللل|ملل$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy8luffya.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '9623', ptt: true }, { quoted: fkontak })}



if (/^ساتارو|ساتورو|ساتوروو$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy7.jogo.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '9273', ptt: true }, { quoted: fkontak})}



if (/^غوجو|غوجوو$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy13jogo1.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '7283', ptt: true }, { quoted: fkontak })}



if (/^سوكونا|سكونا|اسكونا$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy6.sukuna.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '5293', ptt: true }, { quoted: fkontak })}



if (/^نامي|سانجي$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy3.name.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '3234', ptt: true }, { quoted: fkontak })}



if (/^كوركودايل|كركدايل|كركودايل|التمساح$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy16.krkudail.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '7197', ptt: true }, { quoted: fkontak })}



if (/^يورتشي|ككشيبو|ككشيبو|كوكوشيبو$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy20.kukoshibo.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '3900', ptt: true }, { quoted: fkontak })}



if (/^لايت$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy19.lait.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4000', ptt: true }, { quoted: fkontak })}



if (/^اكازا$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy18.akaza.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '1000', ptt: true }, { quoted: fkontak })}

  

if (/^دوفلامنجو|دوفلامنغو$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy17.duflamngo.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '9254', ptt: true }, { quoted: fkontak })}

  

if (/^انا جيت$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy5.dahl.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '7926', ptt: true }, { quoted: fkontak })}



if (/^رجعت|انا رجعت|رجعنا$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy4.rgh.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '5618', ptt: true }, { quoted: fkontak })}



if (/^اوني تشان$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy10.one.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '8263', ptt: true }, { quoted: fkontak })}


  
  if (/^اغنيه|اغنيه انمي|انمي$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy12.agnua.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '7193', ptt: true }, { quoted: fkontak })}



if (/^ايتاتشي|اوتشيها|اوتشيها ايتاتشي|أيتاتشي|إيتاتشي$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy14.Itachi.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '8103', ptt: true }, { quoted: fkontak })}



if (/^سانيمي|هاشيرا الرياح|هاشيرا الريح$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy21.sanime.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '8103', ptt: true }, { quoted: fkontak })}

  

if (/^اوتاكو|الاوتاكو|أوتاكو|كرتون$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/luffy15.ataku.mp3'
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '3556', ptt: true }, { quoted:fkontakm })}

  


  
return !0 }
export default handler
