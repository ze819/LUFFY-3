import { download } from 'aptoide-scraper';
let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  try {
    if (command === 'تطبيق') {
      if (!text) throw `*هات اسم التطبيق*`;

    await conn.reply(m.chat, '*انتضر جار تحميل التطبيق*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: 'انضم الى جروب البوت', body: `𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇`, sourceUrl: nnn,thumbnail: '' }}})
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*مساحه الملف كبيره*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*مساحه الملف كبيره*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.تطبيق', caption: null },
        { quoted: m }
      );
    }
  } catch {
    throw `*هات اسم التطبيق*`;
  }
};

handler.command = /^تطبيق$/i;
export default handler;
