import fg from 'api-dylux';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `*𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇*\n\n*مثال*\n*${usedPrefix + command}* https://wa.me/967733707084*`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw '*ارسل رابط فيسبوك صحيح*';
  }

  

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
*ا⊱ ─── {𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇} ─── ⊰*
↳ *الوصف:* ${result.title}
*ا⊱ ────── {⋆♬⋆} ────── ⊰*`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    console.log(error);
    m.reply('*حاول مره اخرى او تحقق ممن الرابط اذا كان صحيح*');
  }
};

handler.help = ['facebook <url>'];
handler.tags = ['downloader'];
handler.command = /^((facebook|فيسبوك|فيس|fb)(downloder|dl)?)$/i;
handler.diamond = true;

export default handler;