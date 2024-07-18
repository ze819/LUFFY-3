const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^لجواهر/i, '')
  count = count ? /ر/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `
*•┃❖❂━━━━━❨تـبادل❩━━━━━❂*╟❧
*•┃❖الـمـبلـغ الـرمـزي*+ *${count}*💎
*•┃❖النقاط المستهلكه من رصيدك:-${xpperdiamond * count}اكـس بـي*`, m)
  } else conn.reply(m.chat, `*❎ لا تملك اكس بي الـكافـي للحصول على هاذي* *${count}* الجــواهـر💎\n\n*تـستـطـيع الحصو عــلى اكـس بـي مــن الالـعاب والتفاعل مع البوت*`, m)
}
handler.help = ['todiamond', 'todiamondall']
handler.tags = ['econ']
handler.command = ['لجواهر', 'لجواهرر'] 

handler.disabled = false

export default handler