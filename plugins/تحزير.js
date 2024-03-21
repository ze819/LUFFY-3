const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'Sin motivo';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `*[❗]قم بالرد على الرساله او منشن المستخدم*\n\n*—◉ مثال:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who) {
    throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  }
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
      } *تلقي تحذيرا في هذه المجموعه!*
 *السبب: يخالف شروط الطبيعه والقوانين*\n*عدد التحذيرات ${
        user.warn
      }/3*`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 3) {
    if (!bot.restrict) {
      return m.reply(
          '*[❗ملاحضه❗] يوجد قيود على هاذا البوت كلم المطور يرفع عني القيود لازاله مخالفين القوانين في الجروب*',
      );
    }
    user.warn = 0;
    await m.reply(
        `انـاا حذرتك عده مرات!!\n*@${
          who.split`@`[0]
        }*انـت تجـاوزت 3 تحذيرات سيتم طردك من الجروب حاليا ياعزيزي*`,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(تحذير|انذار|warn|تحذير)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
