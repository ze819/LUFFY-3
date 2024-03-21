import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] استخدم هذا الأمر مباشرة في خاص الرئيسي من للبوت*'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = 'MyvenomSession';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*[❗] لم يتم العثور على ملف يتضمن معرف الدردشة*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*[❗] تم حذف ${filesDeleted} ملف من الجلسه تبع البوت*`}, {quoted: m});
    }
  } catch (err) {
    console.error('خطأ في قراءة المجلد أو ملفات الجلسة:', err);
    await conn.sendMessage(m.chat, {text: '*[❗] حدث خطأ عند إزالة ملفات الجلسة*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*〘 967733707084​𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒐𝒇𝒇𝒚١⁵〙*\n\n*[❗] اذا لم يرد البوت علي الامر الخاص بك يرجي وضع مثال صغير 3 مرات*\n\n*—◉ مثال:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['fixmsgespera'];
handler.tags = ['fix'];
handler.command = /^(تصليح|ds)$/i;
export default handler;