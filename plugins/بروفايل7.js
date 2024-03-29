let handler = async (m, { conn, text }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    if (!text) throw '*نسيت نص يرجى كتابه اسمك*';
  
    const avatar = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/2d2899be76e41d860a68b.jpg');
    const displayName = conn.getName(m.sender);
    const username = m.sender.split('@')[0];
    const replies = '69'; // Replace with the desired value
    const retweets = '69'; // Replace with the desired value
    const theme = 'dark'; // Replace with the desired value
  
    const url = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayName)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;
  
    conn.sendFile(m.chat, url, 'tweet.png', '*ا𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇*\n*مـــطـــوري*\n*967733707084*',fkontak,m);
  };
  
  handler.help = ['tweet <comment>'];
  handler.tags = ['maker'];
  handler.command = /^(تويت|ب7|بروفايل7)$/i;
  
  export default handler;
