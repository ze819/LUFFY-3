const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/e98feb92f401dd5c6df91.mp4'
let str = ` *•┃❖اهلا بك في قسم اللوجوهات الاخـ❄️ـرى*
*❖☾•═━═━═⊳•⊰❄️⊱•⊲═━═━═•☽❖*
*•┃❖❄️〗❰سام❱*
*•┃❖❄️〗❰شكلا❱*
*•┃❖❄️〗❰جلد-سمك❱*
*•┃❖❄️〗❰خبز❱*
*•┃❖❄️〗❰استايل-فخم❱*
*•┃❖❄️〗❰رعب-دم❱*
*•┃❖❄️〗❰ضوء-النيون❱*
*•┃❖❄️〗❰رعد❱*
*•┃❖❄️〗❰شارع❱*
*•┃❖❄️〗❰اضواء-الشارع❱*
*•┃❖❄️〗❰وهج-الفراشات❱*
*•┃❖❄️〗❰قطر-ماء❱*
*•┃❖❄️〗❰شطب-جدار❱*
*•┃❖❄️〗❰هديه-عيدميلاد❱*
*•┃❖❄️〗❰عسل❱*
*•┃❖❄️〗❰مخدرات❱*
*•┃❖❄️〗❰هديه-رعب❱*
*•┃❖❄️〗❰الواح❱*
*•┃❖❄️〗❰رخام❱*
*•┃❖❄️〗❰ثلج-بارد❱*
*•┃❖❄️〗❰عصير❱*
*•┃❖❄️〗❰صدى-معدن❱*
*•┃❖❄️〗❰جولد❱*
*•┃❖❄️〗❰بسكويت❱*
*•┃❖❄️〗❰طعام❱*
*•┃❖❄️〗❰الخيال-العلمي❱*
*•┃❖❄️〗❰خشب1❱*
*•┃❖❄️〗❰قزح-معدني❱*
*•┃❖❄️〗❰جوهره❱*
*•┃❖❄️〗❰معدن-لامع1❱*
*•┃❖❄️〗❰معدن-ساخن❱*
*•┃❖❄️〗❰رصيف❱*
*•┃❖❄️〗❰عنكبوت❱*
*•┃❖❄️〗❰حلوى❱*
*•┃❖❄️〗❰معدن-ازرق❱*
*•┃❖❄️〗❰خرافي1❱*
*•┃❖❄️〗❰معدن-اسود❱*
*•┃❖❄️〗❰معدن❱*
*•┃❖❄️〗❰كروم❱*
*•┃✰━━━━━⌬〔❄️〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖🐉〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*`

  await conn.reply(m.chat, '*انتضر جاري تجهيز قائمه لوجوهات اخرى..*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})
    conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
} 

handler.help = ['13']
handler.tags = ['13']
handler.command = /^(16)$/i
export default handler
