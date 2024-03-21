import fetch from 'node-fetch'
let timeout = 30000
let poin = 2500
let handler = async (m, { conn, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, '*❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯*', conn.tekateki[id][0])
        throw false
    }
    let pp = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`
    let src = await (await fetch('https://raw.githubusercontent.com/ze819/-al/main/src/game/gmh.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*${json.soal}*
*•┃❖↞الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)} ثانية┇❯*
̣${usedPrefix}
*•┃❖↞الـجـائـزة💰↞ ${poin}  نقطه┇❯*\n*〘 ❖─── ~『𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇』~───❖ 〙*
    `.trim()
    conn.tekateki[id] = [
        await conn.sendFile(m.chat, pp, null, caption,fkontak, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.reply(m.chat, `*❮ ⌛┇انتــهــى الــوقــت┇⌛❯*\n*❖↞┇الاجـابـة✅↞*  *${json.jawaban}* *┇❯*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^تجميع|جمع/i

export default handler
