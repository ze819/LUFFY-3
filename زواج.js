let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*•┃❖❂━━━━━━❨🍹❩━━━━━━❂*╟❧
*•┃❖الف مبروك للعــريس*🤵🍷
*•┃❖${toM(a)}*
*•┃❖الـف مبروك للعروسـه*👰‍♀️🍹
*•┃❖${toM(b)},*
*•┃❖━━━━━━━❨🍹❩━━━━━━❂*╟❧`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','زواج']
handler.group = true

export default handler
