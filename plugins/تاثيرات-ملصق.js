import uploadImage from '../lib/uploadImage.js';
import {sticker} from '../lib/sticker.js';
import MessageType from '@whiskeysockets/baileys';
const effects = ['jail', 'gay', 'glass', 'wasted', 'triggered', 'lolice', 'simpcard', 'horny'];


const handler = async (m, {conn, usedPrefix, text}) => {
  const effect = text.trim().toLowerCase();
  if (!effects.includes(effect)) {
    throw `
*•┃❖🌸قائـمه تاثيرات المتواجده🌸*\n
*•┃❖الاستخدم الصحيح*${usedPrefix}*استيكر زجاج*
*•┃❖ثم قم بالرد على الصوره*
*•┃❖التاثيرات المتواجده التالي استخدمها*\n
${effects.map((effect) => `*•┃❖ ${effect}`).join('*\n')}
`.trim();
  }
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*[❗ملاحضه❗]*\n*اعمل ريبلي او رد على الصوره*\n*مثال استيكر زجاج✅*';
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*[❗ملاحضه❗]*\n*اعمل ريبلي او رد على الصوره*\n*مثال استيكر زجاج✅*`;
  const img = await q.download();
  const url = await uploadImage(img);
  const apiUrl = global.API('https://some-random-api.com/canvas/', encodeURIComponent(effect), {
    avatar: url,
  });
  try {
    const stiker = await sticker(null, apiUrl, global.packname, global.author);
    conn.sendFile(m.chat, stiker, null, {asSticker: true});
  } catch (e) {
    m.reply('*[❗خطاء❗]*\n*احدث خطاء اثنا التحويل او عمل التاثير*');
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m);
  }
};
handler.help = ['stickmaker (caption|reply media)'];
handler.tags = ['General'];
handler.command = /^(تاثير-ملصق|استيكر|تاثيرات-استيكر|cs)$/i;
export default handler;
