const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  let videoUrl = 'https://telegra.ph/file/1a3dbb0baa04008a6cf5f.mp4'
let str = `*•┃❖اهلا بك في  اوامر الجروبات*
*❖☾•═━═━═⊳•⊰⭐⊱•⊲═━═━═•☽❖*
*•┃❖📧〗〘.منشن〙*
*•┃❖🪄〗〘.مخفي〙*
*•┃❖📤〗〘.رفع〙*
*•┃❖📥〗〘.خفض〙*
*•┃❖🖼️〗〘.تغيرالصوره〙*
*•┃❖🃏〗〘.تغير-الترحيب〙*
*•┃❖⚗️〗〘.تغيرالوصف〙*
*•┃❖🔮〗〘.تغيرالاسم〙*
*•┃❖🏮〗〘.جروب〙*
*•┃❖🪩〗〘.لينك〙*
*•┃❖⛔〗〘.رستر〙*
*•┃❖🚸〗〘.المغادره〙*
*•┃❖♻️〗〘.تغير-الترحيب〙*
*•┃❖⛔〗〘.احذف〙*
*•┃❖⚠️〗〘.تحذير〙*
*•┃❖🎴〗〘.ازاله-التحذير〙* 
*•┃❖🚷〗〘.طرد〙*
*•┃❖🔰〗〘.الجروب〙*
*•┃❖⚠️〗〘.الانذارات〙*
*•┃❖👻〗〘.اشباح〙*
*•┃❖🔥〗〘.جروب1〙*
*•┃❖📜〗〘.فحص〙*
*•┃❖📧〗〘.لمنشن〙*
*•┃❖👑〗〘.الادمن〙*
*•┃✰━━━━━⌬〔🐉〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖🐉〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*`
await conn.reply(m.chat, '*انتضر جاري تجهيز القائمه*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
  conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
} 
handler.help = ['1']
handler.tags = ['1']
handler.command = ['1','1','1','م1']
export default handler
