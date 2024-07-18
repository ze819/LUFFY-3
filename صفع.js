import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    let who;
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else { 
      who = m.chat;
    }
      const textquien = `*[❗] اعمل منشن علي الشخص الي عايز تصفعه*\n\n*❖┋مثال:*\n◉ ${usedPrefix + command} @${global.suittag}`;
    if (who === m.chat && m.isGroup || !who && m.isGroup) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  try {
    let name;
    if (who === m.chat) {
      name = "𝚃𝚑𝚎 - 𝙱𝚘𝚝";
    } else {
      name = conn.getName(who);
    }
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`https://api.waifu.pics/sfw/slap`);
    let jkis = await apislap.json();
    let { url } = jkis;
    let stiker = await sticker(null, url, `${name2} 𝐋𝐔𝐅𝐅𝐘-𝐁𝐎𝐓 ${name}`, 967733707084);
    conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true,  { contextInfo: { forwardingScore: 200, isForwarded: false, externalAdReply:{ showAdAttribution: false, title: wm, body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
 } catch (e) {
    throw `*[❗] حصل خطأ*`;
  };
};
handler.help = ["slap"];
handler.tags = ["General"];
handler.command = /^(slap|صفع)$/i;
export default handler;
