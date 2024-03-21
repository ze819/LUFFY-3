const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/447769fdfbb6816b3c3ce.mp4'
let str = `*•┃ قسم تغير الصـ🎧ــوت*
*❖☾•═━═━═⊳•⊰🎧⊱•⊲═━═━═•☽❖*
*•┃❖🎤〗〘.بدين〙*
*•┃❖🎵〗〘.تسريع-بسيط〙*
*•┃❖🎶〗〘.الي〙*
*•┃❖🔉〗〘.عكس〙*
*•┃❖🔔〗〘.بطئ〙*
*•┃❖🔈〗〘.سلس〙*
*•┃❖🔊〗〘.سريع〙*
*•┃❖📢〗〘.سنجاب〙*
*•┃❖🎧〗〘.تحسين〙*
*•┃❖🔉〗〘.عميق〙*
*•┃❖🔊〗〘.منفوخ〙*
*•┃❖🔈〗〘.عميق2〙*
*•┃✰━━━━━⌬〔🎧〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖🎧〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*
`
  await conn.reply(m.chat, '*انتضر جاري تجهيز قائمه الاصوات..*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
}
handler.help = ['9']
handler.tags = ['9']
handler.command = /^(9)$/i
export default handler
