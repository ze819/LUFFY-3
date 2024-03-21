//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
*❖☾•═━═━═⊳•⊰❄️⊱•⊲═━═━═•☽❖*
*✦⌈⇖ مــعـلــومـات الــجـروب ⇘⌋✦*
  *❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*❖↫ اسم الجروب♥️: ${groupMetadata.subject}* 
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*❖↫ الأعضاء♥️: ${participants.length}*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*❖↫ منشء الجروب♥️: @${owner.split('@')[0]}* 
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*❖↫ الادمــن👑:*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
 ${listAdmin}
 *❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
❖↫ *معلومات الجروب♥️✨:*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*• ${isBanned ? '✅' : '❌'} الحظر*
*• ${welcome ? '✅' : '❌'} الترحيب*
*• ${detect ? '✅' : '❌'} الكاشف*
*• ${del ? '✅' : '❌'}الحذف*
*• ${antiLink ? '✅' : '❌'} حاظر الروابط*
*• ${sWelcome ? '✅' : `❌`}تِفعيل التر*
*• ${sBye ? `✅` : `❌`}تعطيل الترحيب*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*❖↫ إعــدادات الــرسـالـه :*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
*• الترحيب:❄️* ${sWelcome}
*• الـوداع:❄️* ${sBye}
*• الرفع:*❄️${sPromote}
*• الخفض:❄️* ${sDemote}
*• المتفاعلين:${participants.length}*|❄️
*•لفل  الجروب:${groupMetadata.participants.length}|❄️*
*• المطور:@${global.owner[0]}*❄️
*❖☾•═━═━═⊳•⊰❄️⊱•⊲═━═━═•☽❖*
*❖↫ الــوصــف :*
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
${groupMetadata.desc?.toString() || '*مفي وصف♥️✨*'}
*❖☾•═━═⊳•⊰❄️⊱•⊲═━═•☽❖*
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'معلومات-الجروب', 'الجروب'] 
handler.group = true

export default handler