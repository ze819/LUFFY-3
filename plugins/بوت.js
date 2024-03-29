const handler = async (m, {conn, text, command}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/c1c21027a0b1d4575534c.mp4'
let str =`*•┃❖مرحبا بك في الذكاء الاصطناعي🤖〗*\n
*•┃❖ل استعمال الذكاء الاصطناعي🧠〗*
*•┃❖استخدم كلمه .سعدني ثم سوالك🔰〗*
*•┃❖استخدم كلمه .تحدث ثم ســوالك🗣️〗*
*•┃❖اسئل.لوفي على اي شيء في بالك♻️〗*
*•┃❖اسئل.سونغ على اي شيء في بالك🧿〗*
*•┃❖اسئل.ماكيما على اي شيء في بالك🌸〗*
*•┃❖مثال①|.سعدني من ملك القراصنه🏴‍☠️〗*
*•┃❖مثال②|.تحــدث كـــيـــف حـــالــك📌〗*
*•┃❖مثال③|.سونغ ما اسم الشخصيه📌〗*
*•┃❖مثال④|.لوفي ماهيها اكلتك المفضله📌〗*
*•┃❖مثال⑤|.ماكيما اكتبي بيت شعر قصير📌〗*
`
  conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
}
handler.help = ['بوت']
handler.tags = ['بوت']
handler.command = /^(بوت)$/i
export default handler
