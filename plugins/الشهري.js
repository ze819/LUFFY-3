const rewards = {
    exp: 50000,
    money: 49999,
    potion: 10,
    mythic: 3,
    legendary: 
const cooldown = 2592000000
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }//conn.sendButton(m.chat,'*––––––『 MONTHLY 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Menu', '.menu']],m)
    m.reply(`
    🎁 *monthly reward*
    ▢ *Has recieved:*
     ${text}`)
user.lastmonthly = new Date * 1
}
handler.help = ['hhhhh']
handler.tags = ['hhhhhh']
handler.command = /^(hhhhhhh)$/i
handler.cooldown = cooldown
export default handler