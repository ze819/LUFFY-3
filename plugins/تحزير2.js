const handler = async (m, {conn, text, command, usedPrefix}) => {
  const pp = './warn.jpg';
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const warntext = `*[❗] عليك ان تمنشن الشخص الي بتزيل الانذار عليه او  عمل ريبلي لرسالته♥️✨*\n\n*—◉ مثـال:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!who) throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  if (user.warn == 0) throw '*[❗] عليك ان تمنشن الشخص الي بتزيل الانذار او الرد على رسال*';
  user.warn -= 1;
  await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`}تم ازاله التحذير او الانذار بنجاح✅*\n*عددالانذارات ${user.warn}/3*`, null, {mentions: [who]});
};
handler.command = /^(ازاله-الانذار)|رفع-الانذار|ازاله-التحذير$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
