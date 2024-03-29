const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/c1c21027a0b1d4575534c.mp4'
let str = ` *•┃❖اهلا بك في  قسـم لوغـ🔥ـو احترافي*
*❖☾•═━═━═⊳•⊰🏮⊱•⊲═━═━═•☽❖*
*•┃❖🏮〗❰هيكل-عضمي❱*
*•┃❖🏮〗❰رسم❱*
*•┃❖🏮〗❰دائري-ازرق❱*
*•┃❖🏮〗❰فضاء❱*
*•┃❖🏮〗❰لامع❱*
*•┃❖🏮〗❰خيال❱*
*•┃❖🏮〗❰اخضر❱*
*•┃❖🏮〗❰سيف❱*
*•┃❖🏮〗❰صاعقه❱*
*•┃❖🏮〗❰ساخن❱*
*•┃❖🏮〗❰تشويش❱*
*•┃❖🏮〗❰متصدع❱*
*•┃❖🏮〗❰كسور❱*
*•┃❖🏮〗❰قطع-ورق❱*
*•┃❖🏮〗❰علي-الجدران❱*
*•┃❖🏮〗❰ثلج❱*
*•┃❖🏮〗❰ضوءالنيون❱*
*•┃❖🏮〗❰سحابه❱*
*•┃❖🏮〗❰شتاء❱*
*•┃❖🏮〗❰مربع❱*
*•┃❖🏮〗❰مصباح❱*
*•┃❖🏮〗❰سحب-السماء❱*
*•┃❖🏮〗❰سحاب1❱*
*•┃❖🏮〗❰رمل❱*
*•┃❖🏮〗❰رمل2❱*
*•┃❖🏮〗❰رمل3❱*
*•┃❖🏮〗❰معدن-غامق❱*
*•┃❖🏮〗❰شمس-الصباح❱*
*•┃❖🏮〗❰مجره❱*
*•┃❖🏮〗❰مزدوج❱*
*•┃❖🏮〗❰ارجواني❱*
*•┃❖🏮〗❰ورد❱*
*•┃❖🏮〗❰ايطار-فاخر❱*
*•┃❖🏮〗❰ازرق-لامع❱*
*•┃❖🏮〗❰ذهب❱*
*•┃❖🏮〗❰كربون❱*
*•┃❖🏮〗❰قماش❱*
*•┃❖🏮〗❰النيون❱*
*•┃❖🏮〗❰العاب-ناريه❱*
*•┃❖🏮〗❰بالون❱*
*•┃❖🏮〗❰دم❱*
*•┃❖🏮〗❰حريق❱*
*•┃❖🏮〗❰ذئب❱*
*•┃❖🏮〗❰ذئب2❱*
*•┃❖🏮〗❰جوكر❱*
*•┃❖🏮〗❰احجار❱*
*•┃❖🏮〗❰اوراق-شجر❱*
*•┃❖🏮〗❰العاب-ناريه2❱*
*•┃❖🏮〗❰هيكل-عضمي❱*
*•┃❖🏮〗❰بالون2❱*
*•┃✰━━━━━⌬〔🏮〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖🐉〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*`

  await conn.reply(m.chat, '*انتضر جاري تجهيز قائمه لوغو احترافي..*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})
    conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
} 

handler.help = ['13']
handler.tags = ['13']
handler.command = /^(​​​​​​​​​​​​​​​​​​​​​🙄☹️​​​​​​​​​​​​​​​​​​​​​​​​​​🙁​​​​​​​​​​​​​​​​​​​​​​​​​​🙁)$/i
export default handler
