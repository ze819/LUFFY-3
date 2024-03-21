const rewards ={
exp: 1500,
money: 3599,
potion: 9,
}
  const cooldown =6048000
  let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastweekly < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] += rewards[reward]
      text += `*${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
    }
//conn.sendButton(m.chat,'*『 WEEKLY *', text.trim(), null, [['Profile', ''], ['weekly', '.weekly']],m)
    m.reply(`
    🎁 *weekly reward*
    
    ▢ *Has recieved:*
  ${text}`)
  user.lastweekly = new Date * 1
  }
  handler.help = ['weekly']
  handler.tags = ['econ']
  handler.command = /^(¿¿¿)$/i
  
  handler.cooldown = cooldown
  
  export default handler