import fetch from 'node-fetch' 
 let handler  = async (m, { conn, text }) => { 
 try { 
 let res = await fetch('https://cataas.com/cat') 
 let img = await res.buffer() 
 let caption = `*〘 ❖─── ~『𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇』~───❖ 〙*`.trim() 
 conn.sendFile(m.chat, img, 'cat.jpg', caption, m) 
 } catch (e) { 
 console.log(e) 
 throw '* حدث خطا!*' 
 }} 
 handler.help = ['cat'] 
 handler.tags = ['random'] 
 handler.command = /^قط|قطة|قطه$/i 
 handler.fail = null 
 export default handler
