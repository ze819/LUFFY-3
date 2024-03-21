const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/2a0b1821a51cb05dc7d0b.mp4'
let str = `*•┃❖اهلا بك في قسم الترفيـ🌇ـهه*
*❖☾•═━═━═⊳•⊰🌇⊱•⊲═━═━═•☽❖*
*•┃❖🌄〗〘.دمج〙*
*•┃❖🌅〗〘.المطور〙*
*•┃❖🏞️〗〘.توب〙*
*•┃❖🎑〗〘.منشني〙*
*•┃❖🌠〗〘.الشخصيه〙*
*•┃❖🎇〗〘.بروفايلي〙*
*•┃❖🎆〗〘.انطق〙*
*•┃❖🌇〗〘.ميسي〙*
*•┃❖🌆〗〘.الدون〙*
*•┃❖🏙️〗〘.قدوتي〙*
*•┃❖🌃〗〘.ميمز〙*
*•┃❖🌌〗〘.انمي〙*
*•┃❖🌉〗〘.اوتشيها〙*
*•┃❖🌁〗〘.اختفاء〙*
*•┃❖🎡〗〘.لو〙*
*•┃❖🧠〗〘.ذكاء〙*
*•┃❖🐦〗〘.غباء〙*
*•┃❖💗〗〘.حب〙*
*•┃❖〽️〗〘.حضي〙*
*•┃❖💞〗〘.حكمه〙*
*•┃❖🌸〗〘.جمال〙*
*•┃❖💒〗〘.زواج〙*
*•┃❖🧿〗〘.طلاق〙*
*•┃❖👒〗〘.لوفي〙*
*•┃❖🎩〗〘.خدعه〙*
*•┃❖🔁〗〘.تكرار〙*
*•┃❖👻〗〘.شبيهي〙*
*•┃❖💌〗〘.اقتباس〙*
*•┃❖👩‍❤️‍💋‍👩〗〘.تطقيم〙*
*•┃❖👦〗〘.تطقيم-اولاد〙*
*•┃❖👧〗〘.تطقيم-بنت〙*
*•┃❖⚠️〗〘.ابلاغ〙*
*•┃❖⚛️〗〘.حاسبه〙*
*•┃❖👾〗〘.باركود〙*
*•┃❖🐑〗〘.خروف〙*
*•┃❖📂〗〘.معلوماتي〙*
*•┃❖🤖〗〘.بوت〙*
*•┃❖⌛〗〘سرعه.〙*
*•┃❖🎨〗〘.ارسم〙*
*•┃❖👋〗〘.صفع〙*
*•┃❖🚼〗〘.ورع〙*
*•┃❖🌞〗〘.شخصيتك〙*
*•┃❖🗣️〗〘.تحدث〙*
*•┃✰━━━━━⌬〔🌇〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖🐉〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*`
await conn.reply(m.chat, '*انتضر جاري تجهيز القائمه....*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: 'انضم الى جروب البوت', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nnn,thumbnail: '' }}})
await conn.sendMessage(m.chat, {
   react: {
 text: "📁",
 key: m.key,
   }
  })    
  conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
}
handler.help = ['2']
handler.tags = ['2']
handler.command = /^(2)$/i
export default handler
