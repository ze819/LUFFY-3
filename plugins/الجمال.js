let handler = async (m, { conn, command, text }) => {
let stupidity = `*قـــيـــاس نســـبــه جمـاالـك🍹*
*•┃❖❂━━━━━━❨🦋❩━━━━━━❂*╟❧*
*نسبة جمالك ${text}هيا* *${Math.floor(Math.random() * 
100)}%* *من 100%*

*اضــن انكـك تـحتاج الى عمليه تجميل♥️✨*
*•┃❖━━━━━━━❨🦋❩━━━━━━❂*╟❧`.trim()
m.reply(stupidity, null, { mentions: conn.parseMention(stupidity) })}
handler.help = ['stupidity']
handler.tags = ['fun']
handler.command = /^(جمال|الجمال)$/i
export default handler