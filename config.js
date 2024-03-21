import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
  ['967733707084','𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒖𝒇𝒇𝒚١⁵', true],
[ `967733707084`, `𝐋𝐔𝐅𝐅𝐘١⁵`,true],
[ `967733707084​​​​​​​​​​`, `𝐋𝐔𝐅𝐅𝐘١⁵`,true],
]

global.suittag = ['967733707084'] 
global.prems = ['967733707084', '967733707084'] 
global.reportes_solicitudes = ['967733707084']

global.packname = '〖💫𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇💫〗'
global.author = '967733707084'
global.wm = '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇'
global.igfg = '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇'
global.wait = '*_⌛جاري التحميل▰▰▰▱▱▱▱▱⏳_*'
function _0x59a4(_0x46c0ff,_0x198c34){var _0x453459=_0x4534();return _0x59a4=function(_0x59a4a4,_0x4efd80){_0x59a4a4=_0x59a4a4-0x9e;var _0x108e75=_0x453459[_0x59a4a4];return _0x108e75;},_0x59a4(_0x46c0ff,_0x198c34);}var _0x583757=_0x59a4;function _0x4534(){var _0x3f1eec=['1365133AXfwgB','*•┃❖انتضر جاري تلبيه طلبك〗*\n*•┃❖انضم الى جروب البوت 〗*\n*•┃❖ا https://chat.whatsapp.com/GtZMQSQJEd987xro9Wcs3h 〗*','1610710hLobLZ','8wNspVD','786139FZiPQy','12SaSXPH','1040104rTzHFk','858441luSIQe','3718985xnKZMM','4396644QxZNfF','18HasQLA'];_0x4534=function(){return _0x3f1eec;};return _0x4534();}(function(_0x49c1f1,_0x57b9b4){var _0x3f3ba0=_0x59a4,_0x219991=_0x49c1f1();while(!![]){try{var _0x16cb23=parseInt(_0x3f3ba0(0xa0))/0x1+parseInt(_0x3f3ba0(0xa2))/0x2+parseInt(_0x3f3ba0(0xa3))/0x3*(-parseInt(_0x3f3ba0(0xa1))/0x4)+parseInt(_0x3f3ba0(0xa4))/0x5+-parseInt(_0x3f3ba0(0xa5))/0x6+-parseInt(_0x3f3ba0(0xa7))/0x7*(parseInt(_0x3f3ba0(0x9f))/0x8)+parseInt(_0x3f3ba0(0xa6))/0x9*(parseInt(_0x3f3ba0(0x9e))/0xa);if(_0x16cb23===_0x57b9b4)break;else _0x219991['push'](_0x219991['shift']());}catch(_0x3aea7e){_0x219991['push'](_0x219991['shift']());}}}(_0x4534,0x8f0a8),global['wait']=_0x583757(0xa8));global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')
global.imagen5 = fs.readFileSync('./src/+18.jpg')

global.mods = [] 

//********Tiempo***************
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//*****************************
global.nn = 'http://wa.me/967733707084' //Grupo 1
global.nnn = 'https://whatsapp.com/channel/0029VaQ12JyLY6d1PdN5r93a' //Grupo 1
global.nnnn = 'https://telegra.ph/file/f2c84b721cf5a755e1ec1.jpg' //Grupo 1
global.nnnnn = 'http://wa.me/967733707084' //Grupo 1
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇`
global.gt = '★𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇★'
global.mysticbot = '★𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇★'
global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'
global.mysticbot = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'
global.waitt = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*'
global.waittt = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*'
global.waitttt = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*'
global.nomorown = '967733707084'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}}
global.multiplier = 250
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
