let handler = async (m, { conn, command, text }) => {
let stupidity = `*نــسبـة غبــائــك🔅*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*نسبة اغباء ${text}هيا* *${Math.floor(Math.random() * 100)}%* *من 100%*
*بـاكـــا يـرو اذهب الى المصحه العقليه♥️✨*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
`.trim()
m.reply(stupidity, null, { mentions: conn.parseMention(stupidity) })}
handler.help = ['stupidity']
handler.tags = ['fun']
handler.command = /^(غباء|باكا)$/i
export default handler