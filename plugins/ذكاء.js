let handler = async (m, { conn, command, text }) => {
let intelligence = `*نســـــبة الـــذكـــاء🧠*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*نسـبه ذكـائك ${text}هيـا* *${Math.floor(Math.random() * 100)}%* *من 100%*
*لابـئـــــــس بـــــذالـــــك♥️✨*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
`.trim()
m.reply(intelligence, null, { mentions: conn.parseMention(intelligence) })}
handler.help = ['intelligence']
handler.tags = ['fun']
handler.command = /^(ذكاء)$/i
export default handler