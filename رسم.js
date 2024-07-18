import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*[🎨] اكتب نص ترسمه بالذكاء الاصطناعي لاكن الأمر لا يعمل الا باللغة الإنجليزية فقط*\n\n*—◉🖌️ مثل*\n*◉ ${usedPrefix + command} makema*\n*◉ ${usedPrefix + command} luffy*\n\n🎨~*⫷𝑀𝛩𝑁𝐾𝐸𝑌 𝐷 𝐿𝑈𝐹𝐹𝑌⫸*~🎨`;

  try {
    m.reply('*جــار التـحـمـيـل*');

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*[❗] حصل خطأ*';
    }
  } catch {
    throw '*[❗] حــــصل خطــأ*';
  }
};

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['dalle', 'ارسم', 'رسم', 'openai2'];
export default handler;