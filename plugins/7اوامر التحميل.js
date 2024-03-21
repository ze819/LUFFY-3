const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/2a0b1821a51cb05dc7d0b.mp4'
let str = `*•┃❖اهلا بك في قسم التحمـ📥ـيل*
*❖☾•═━═━═⊳•⊰⤵️⊱•⊲═━═━═•☽❖*
*•┃❖📥〗〘.يوتيوب〙*
*•┃❖📥〗〘.تيك〙*
*•┃❖📥〗〘.كيوت〙*
*•┃❖📥〗〘.قطه〙*
*•┃❖📥〗〘.كلب〙*
*•┃❖📥〗〘.بنت〙*
*•┃❖📥〗〘.نيكو〙*
*•┃❖📥〗〘.عيدميلاد〙*
*•┃❖📥〗〘.تخيل〙*
*•┃❖📥〗〘.افتار〙*
*•┃❖📥〗〘.خلفيات〙*
*•┃❖📥〗〘.شغل〙*
*•┃❖📥〗〘.اغنيه〙*
*•┃❖📥〗〘.بلاك-بينك〙*
*•┃❖📥〗〘.ايديت〙*
*•┃❖📥〗〘.انستا〙*
*•┃❖📥〗〘.فيسبوك〙*
*•┃❖📥〗〘.تطبيق〙*
*•┃❖📥〗〘.بينك〙*
*•┃❖📥〗〘.يوب〙*
*•┃❖📥〗〘.صوت〙*
*•┃❖📥〗〘.ميديا〙*
*•┃✰━━━━━⌬〔🐉〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖🐉〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*
`
await conn.reply(m.chat, '*انتضر جاري تجهيز قائمه التحميل*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})
    conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
}
handler.help = ['7']
handler.tags = ['7']
handler.command = /^(7)$/i
export default handler
