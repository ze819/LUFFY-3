let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)m.reply(`*•┃❖❂━━━━━━❨🏮❩━━━━━━❂*╟❧
*•┃❖تـم الطلاق الاحمـق طلـقـهــا*🍷
*•┃❖${toM(a)}*
*•┃❖لاتزعـل/ي ازوجـك غيـره/ا ياعزيزي🍹*
*•┃❖${toM(b)}*
*•┃❖━━━━━━━❨🏮❩━━━━━━❂*╟❧`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['طلاق','ن']
handler.group = true
export default handler

