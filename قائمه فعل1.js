//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	
  const sections = [
     {
    title: `≡ List of options`,
    rows: [
    {title: "🔮 | englizelufy", rowId: `${usedPrefix + command} englizelufy`},
    {title: "🌎 | luffy", rowId: `${usedPrefix + command} luffy`},
    {title: "🔞 | Nsfw", rowId: `${usedPrefix + command} nsfw`},
    {title: "🧬 | OnlyEnglish", rowId: `${usedPrefix + command} onlyenglish`},
    {title: "🔗 | Antilink1", rowId: `${usedPrefix + command} Antilink1`},
      {title: "🚫 | Antidelete", rowId: `${usedPrefix + command} antidelete`},
      {title: "🖼 | Autosticker", rowId: `${usedPrefix + command} autosticker`},
    {title: "⏏️ | Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
    {title: "🗣️ | ChatBot", rowId: `${usedPrefix + command} chatbot`},
    {title: "🔎 | antifake1", rowId: `${usedPrefix + command} antifake1`},
    {title: "📑 | Document", rowId: `${usedPrefix + command} document`},
    {title: "🛡️ | Restrict", rowId: `${usedPrefix + command} restrict`},
    {title: "💬 | OnlyPvivate", rowId: `${usedPrefix + command} onlydm`},
    {title: "👥 | OnlyGroup", rowId: `${usedPrefix + command} onlygp`}
    ]
      },
  ]
  
  const listMessage = {
    text: '\nHere is a list of what you can turn on and off',
    footer: igfg,
    title: `≡ List of options`,
    buttonText: "Click here",
    sections
  }
  
    let isEnable = /true|enable|منح|(turn)?on|1/i.test(command)
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[conn.user.jid] || {}
    let type = (args[0] || '').toLowerCase()
    let isAll = false, isUser = false
    switch (type) {
      case 'مضادالانجليزي':
      case 'bv':
      case 'bienvenida':
        if (!m.isGroup) {
          if (!isOwner) {
            global.dfail('group', m, conn)
            throw false
          }
        } else if (!isAdmin) {
          global.dfail('admin', m, conn)
          throw false
        }
        chat.englizelufy = isEnable
        break
        
        case 'مضادالوهمي':
        case 'detector':
          if (!m.isGroup) {
           if (!isOwner) {
             global.dfail('group', m, conn)
            throw false
          }
         } else if (!isAdmin) {
           global.dfail('admin', m, conn)
           throw false
         }
         chat.antifake1 = isEnable
       break
        case 'استكيرتلقائي':
        if (m.isGroup) {
          if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
          }
        }
        chat.autosticker = isEnable
        break

      case 'ردتلقائي':
      case 'publico':
        isAll = true
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
        global.opts['self'] = !isEnable
        break
      case 'مضادالسب':
      case 'antilinkwa':
      case 'antilinkwha':
        if (m.isGroup) {
          if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
          }
        }
        chat.Antilink1 = isEnable
        break
      
      
      case 'onlypv':
      case 'onlydm':
      case 'onlymd':
      case 'solopv':
        isAll = true
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
        global.opts['pconly'] = isEnable
        break
        
      case 'gponly':
      case 'onlygp':
      case 'grouponly':
      case 'sologp':
      case 'sologrupo':
        isAll = true
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
        global.opts['gconly'] = isEnable
        break
        
      default:
       if (!/[01]/.test(command)) return m.reply(`
  ≡ List of options
  
  ┌─⊷ *ADMIN*
  ▢ استيكرتلقائي
  ▢ مضادالسب
  ▢ مضادالانجليزي
  ▢ ......
  └───────────── 
  ┌─⊷ *OWNER*
  ▢ .....
  ▢ ......
  ▢ .....
  └─────────────
  *📌 Example :*
  *${usedPrefix}قفل* استيكرتلقائي
  *${usedPrefix}منح* استيكرتلقائي
  `)
        throw false
    }

    m.reply(`
    ☯️ *${type}* الآن *${isEnable ? 'مُفعل' : 'مُعطل'}* ${isAll ? 'لهذا البوت' : isUser ? '' : 'لهذا البوت'}
  `.trim())  
  }
  handler.help = ['en', 'dis'].map(v => v + 'able <option>')
  handler.tags = ['nable']
  handler.command = /^((en|dis)able|منح|قفل|(turn)?o(n|ff)|[01])$/i
  handler.rowner = true

  export default handler
