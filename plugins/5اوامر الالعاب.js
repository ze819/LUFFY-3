const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/1a3dbb0baa04008a6cf5f.mp4'
let str = `*•┃❖اهلا بك في قسم الالعـ👾ـاب*
*❖☾•═━═━═⊳•⊰🎮⊱•⊲═━═━═•☽❖*
*•┃❖🏓〗〘.لعبه〙*
*•┃❖🪀〗〘.كت〙*
*•┃❖❓〗〘.سؤال〙*
*•┃❖📐〗〘.الرياضيات〙*
*•┃❖🎯〗〘.جمع〙*
*•┃❖🫧〗〘.فكك〙*
*•┃❖🔡〗〘.حروف〙*
*•┃❖🛐〗〘.دين〙*
*•┃❖🧩〗〘.لغز〙*
*•┃❖👁‍🗨〗〘.عين〙*
*•┃❖🇸🇦〗〘.علم〙*
*•┃❖🏴‍☠️〗〘.علوم〙*
*•┃❖🎶〗〘.احزر〙*
*•┃❖⚽〗〘.كوره〙*
*•┃❖🏀〗〘.كوره1〙*
*•┃❖🎲〗〘.نرد〙*
*•┃❖🎴〗〘.لعب〙*
*•┃❖🎰〗〘.رهان〙*
*•┃❖🎳〗〘.تحدي〙*
*•┃❖🪨〗〘.حجر〙*
*•┃❖🎭〗〘.اسماء شخصيات〙*
*•┃❖🧶〗〘.فعالية〙*
*•┃✰━━━━━⌬〔🐉〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖👾〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*`
  await conn.reply(m.chat, '*انتضر جاري تجهيز قائمه الالعاب..*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: 'انضم الى جروب البوت يتم نشر اكواد', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nnn,thumbnail: '' }}})
    conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
}
handler.help = ['5']
handler.tags = ['5']
handler.command = /^(5)$/i
export default handler
