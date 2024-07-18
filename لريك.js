import {toPTT} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) throw `*[⚠️مساعده⚠️]قم بالرد علي الفيديو او الاغنيه اللي عايز تحولها لريكورد*`;
  const media = await q.download?.();
  if (!media && !/video/.test(mime)) throw '*الحجم كبير*';
  if (!media && !/audio/.test(mime)) throw '*الحجم كبير*';
  const audio = await toPTT(media, 'mp4');
  if (!audio.data && !/audio/.test(mime)) throw '*[❗تحذير❗] حصل خطأ*';
  if (!audio.data && !/video/.test(mime)) throw '*[❗تحذير❗] حصل خطأ*';
  const aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: media}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['tovn (reply)'];
handler.tags = ['audio'];
handler.command = /^لريك|to(vn)$/i;
export default handler;