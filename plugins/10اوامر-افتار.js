const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/b9a56ed7fc71221de0da5.mp4'
let str = `*•┃❖اهلا بك في قسم الافـ🖼️ـتار*
*❖☾•═━═━═⊳•⊰🖼️⊱•⊲═━═━═•☽❖*
*•┃❖🌋〗〘.جبل〙*
*•┃❖🎮〗〘.ببجي〙*
*•┃❖🖥️〗〘.جيمينج〙*
*•┃❖🏙️〗〘.جمالي〙*
*•┃❖🌏〗〘.كوكب〙*
*•┃❖📦〗〘.كرتون〙*
*•┃❖🍝〗〘.طعام〙*
*•┃❖🏵️〗〘.درايمون〙*
*•┃❖🕎〗〘.هكر〙*
*•┃❖☯️〗〘.تكنولوجيا〙*
*•┃❖🖼️〗〘.مادارا〙*
*•┃❖🖼️〗〘.ساسكي〙*
*•┃❖🖼️〗〘.ناروتو〙*
*•┃❖🖼️〗〘.ميناتو〙*
*•┃❖🖼️〗〘.نيكو〙*
*•┃❖🖼️〗〘.ديدارا〙*
*•┃✰━━━━━⌬〔🐉〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖🖼️〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*`
  await conn.reply(m.chat, '*انتضر جاري تجهيز قائمه الافتارات..*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
}
handler.help = ['10']
handler.tags = ['10']
handler.limit = 3
handler.command = /^(10)$/i
export default handler
