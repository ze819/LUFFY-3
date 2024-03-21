const handler = async (m, {conn, text, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let videoUrl = 'https://telegra.ph/file/b5dfad99e67848af60af6.mp4'
let str = `*•┃❖اهلا بك في قسم الانـمـ🇯🇵ـي*
*❖☾•═━═━═⊳•⊰🇯🇵⊱•⊲═━═━═•☽❖*
*•┃❖🇯🇵〗〘.cosplay〙*
*•┃❖🇯🇵〗〘.sakura〙*
*•┃❖🇯🇵〗〘.sasuke〙*
*•┃❖🇯🇵〗〘.sagiri〙*
*•┃❖🇯🇵〗〘.nezuko〙*
*•┃❖🇯🇵〗〘.naruto〙*
*•┃❖🇯🇵〗〘.minato〙*
*•┃❖🇯🇵〗〘.miku〙*
*•┃❖🇯🇵〗〘.mikasa〙*
*•┃❖🇯🇵〗〘.madara〙*
*•┃❖🇯🇵〗〘.kotori〙*
*•┃❖🇯🇵〗〘.kurumi〙*
*•┃❖🇯🇵〗〘.keneki〙*
*•┃❖🇯🇵〗〘.kaori〙*
*•┃❖🇯🇵〗〘.kagura〙*
*•┃❖🇯🇵〗〘.kaga〙*
*•┃❖🇯🇵〗〘.itori〙*
*•┃❖🇯🇵〗〘.itachi〙*
*•┃❖🇯🇵〗〘.nezuko〙*
*•┃❖🇯🇵〗〘.isuzu〙*
*•┃❖🇯🇵〗〘.inori〙*
*•┃❖🇯🇵〗〘.hinata〙*
*•┃❖🇯🇵〗〘.hestia〙*
*•┃❖🇯🇵〗〘.emilia〙*
*•┃❖🇯🇵〗〘.eba〙*
*•┃❖🇯🇵〗〘.elaina〙*
*•┃❖🇯🇵〗〘.erza〙*
*•┃❖🇯🇵〗〘.deidara〙*
*•┃❖🇯🇵〗〘.chitoge〙*
*•┃❖🇯🇵〗〘.chiho〙*
*•┃❖🇯🇵〗〘.boruto〙*
*•┃❖🇯🇵〗〘.ayuzawa〙*
*•┃❖🇯🇵〗〘.asuna〙*
*•┃❖🇯🇵〗〘.anna〙*
*•┃❖🇯🇵〗〘.akiyama〙*
*•┃❖🇯🇵〗〘.akira〙*
*•┃❖🇯🇵〗〘.akiyama〙*

*•┃✰━━━━━⌬〔🇯🇵〕⌬━━━━━✰*
*•┃⌬ حقـوق السيد لوفي✍︎* 
*•┃ا⌬ wa.me/967733707084*
*•┃ا⌬┋𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵〖🐉〗*
*╰━━━━━━━━━━━━━━━━━━━━━⬣*
`
  await conn.reply(m.chat, '*انتضر جاري تجهيز قائمه افتار الانمي...*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})
    conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak })
}
handler.help = ['11']
handler.tags = ['11']
handler.command = /^(11)$/i
export default handler
