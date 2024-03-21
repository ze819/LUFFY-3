const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/ac96a45e934ad0c2c4618.mp4'
let str = ` *•┃❖اهلا بك في  قائمه لوغـ🔥ـو ثلاثي الابعاد*
*❖☾•═━═━═⊳•⊰⭐⊱•⊲═━═━═•☽❖*
*•┃❖🧶〗❰كروم❱*
*•┃❖🪙〗❰معدن❱*
*•┃❖🇺🇸〗❰علم-امريكي❱*
*•┃❖🌊〗❰بحر❱*
*•┃❖🌈〗❰قوس-قزح❱*
*•┃❖🚟〗❰انابيب❱*
*•┃❖🪨〗❰حجر❱*
*•┃❖🏮〗❰ضوئي❱*
*•┃❖🩵〗❰تدرج❱*
*•┃❖🪙〗❰معدن-لامع❱*
*•┃❖🏖️〗❰شاطئ❱*
*•┃❖🗒️〗❰ورق❱*
*•┃❖🏄‍♀〗❰بحري❱*
*•┃❖🏅〗❰ذهبي-فاخر❱*
*•┃❖🦄〗❰تدرج-الوان❱*
*•┃❖💙〗❰غراء❱*
*•┃❖☄️〗❰فضاء❱*
*•┃❖👁️〗❰عيون❱*
*•┃❖🌤️〗❰احترافي❱*
*•┃❖☀️〗❰راس-السنه❱*
*•┃❖🎂〗❰عيدميلاد❱*
*•┃❖⌛〗❰رمال❱*
*•┃❖🗳️〗❰صندوق❱*
*•┃❖🪨〗❰صلب❱*
*•┃✰━━━━━⌬〔🐉〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖🐉〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*`

  await conn.reply(m.chat, '*انتضر جاري تجهيز قائمه لوغو ثلاثي الابعاد..*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})
    conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
} 

handler.help = ['13']
handler.tags = ['13']
handler.command = /^(12)$/i
export default handler

