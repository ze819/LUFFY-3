import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@whiskeysockets/baileys'
let handler = async (m, { conn}) => {
  try {   
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://nekos.life/api/hug')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `+${m.sender.split('@')[0]}𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒐𝒇𝒇𝒚١⁵${m.mentionedJid.map((user)=>(user === m.sender)? '967733707084 ': `+${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(ملصقات-انمي|استيك-انمي)$/i
export default handler
