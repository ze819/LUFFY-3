const handler = async (m, {conn, usedPrefix, command}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (!m.quoted) throw `*[❗تنبيه❗] قم بالرد علي الفيديو اللي عايز تحولوا الي gif*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*[❗] النوع غير مناسب مع ${mime} الامر يعمل على الفيديو فقط*`;
  await conn.reply(m.chat, '*انتضر جار تحويل الفيديو الىGIF*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})
  
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*تــم تـحـويـل الـفـيـديـو الي gif بـنـجاح*'}, {quoted: m});
};
handler.command = ['جيف'];
export default handler;
