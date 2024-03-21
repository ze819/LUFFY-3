let handler = async (m, { conn, groupMetadata, text, command}) => {
  if (!m.mentionedJid[0] && !m.quoted) throw '*يمكنك وضع علامة على شخص ما في المجموعة للقيام ببعض الإجراءات*'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let participants = groupMetadata.participants
  conn.reply(m.chat, `*لقد أعطيت للتو ${command} ${text} ل @${user.split('@')[0]}*🍷`, null, { mentions: [user] })

}
handler.help = ['acciones']
handler.tags = ['acciones']
handler.command = /^(هديه|هدية)$/

handler.group = true

export default handler
