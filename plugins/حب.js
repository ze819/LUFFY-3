let handler = async (m, { conn, command, text }) => {
let love = `*نــــســبــــه الحـــــــب💏*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*نسبة الحب ${text}لك ${Math.floor(Math.random() * 100)}% من 100%*
*اطلب/ي/منه ان/يكون حبيب/ه لك/ي♥️✨*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(الحب)|حب$/i
export default handler
