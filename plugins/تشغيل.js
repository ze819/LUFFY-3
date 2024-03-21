//import db from '../lib/database.js
let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply('✅ *البوت نشط في هذه المجموعة*')
  }
  
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'تشغيل']

handler.group = true
handler.rowner = true


export default handler
  