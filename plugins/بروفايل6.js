let handler = async (m, { conn, args }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    let text = args.slice(1).join(' ')
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/its-so-stupid', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/2d2899be76e41d860a68b.jpg'),
    dog: text || 'im+stupid'
    }), 'error.png', `*𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇*`,fkontak ,m)
    }  
    handler.help = ['itssostupid', 'iss', 'stupid']
    handler.tags = ['maker']
    handler.command = /^(بروفايلي6|ب6|بروفايل6)$/i
    export default handler
