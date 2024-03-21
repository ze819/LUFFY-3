let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}
*✦━━─━━━⌠🐦⌡━━━─━━✦*
*⤹⚜ المنشن ⊰⚡⊱ الجماعي ⚜⤸*
\n` + users.map(v => '│◦❈↲ تفاعل يا حب 🫶🏻 ❤️@' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━━[ ايمـا بوت ]━━━━━━✦*', null, {
        mentions: users
    })
}

handler.help = ['l']
handler.tags = ['group']
handler.command = ['l']
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
