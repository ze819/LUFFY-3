import fetch from 'node-fetch';

const fetchQuranData = async (surahNumber) => {
  try {
    const response = await fetch(`https://quran-wudy.vercel.app/surah/${surahNumber}`);
    const data = await response.json();
    return data.data.verses;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const handler = async (m, { conn }) => {
  conn.quranData = conn.quranData ? conn.quranData : {};

  const surahNumber = parseInt(m.text.split(' ')[1]);
  if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    m.reply("*البحث عن أي آية في القرآن بالصوت والقراءة:*\n*.قران 19*\n\n*يقوم الامر بختصار ارسال ایات السورة المعينة من 1 الی 114 سوره و ترد علی قائمة السورة رقم الایه و البوت يرسل المقطع صوتي يقرأ الآية*");
    return;
  }

  const ayahs = await fetchQuranData(surahNumber);
  if (!ayahs) {
    m.reply("Failed to fetch Quran data.");
    return;
  }

  const formattedList = Object.values(ayahs).map(v => (
    `*${v.number.inSurah}.* ${v.text.arab}`
  )).join('\n');

  const instructions = "*قم بالرد على هذه الرسالة برقم الآية المطلوب لاستقبال الصوت*";

  let { key } = await m.reply(`*📖 قائمة الآيات سورة الرقم [ *${surahNumber}* ]:*\n*─────── • ◈ • ───────*\n*${formattedList}\n\n${instructions}`);
  
  // Add reaction to mark completion
  

  // Store the Quran data in conn.quranData variable for later use
  conn.quranData[m.chat] = { list: Object.values(ayahs), key };
};

handler.before = async (m, { conn }) => {
  conn.quranData = conn.quranData ? conn.quranData : {};

  if (m.isBaileys || !(m.chat in conn.quranData)) return;
  const input = m.text.trim();
  if (!/^\d+$/.test(input)) return; // If the input is not a number, do nothing

  const { list, key } = conn.quranData[m.chat];
  if (!m.quoted || m.quoted.id !== key.id || !m.text) return;
  const index = parseInt(input);

  if (isNaN(index) || index < 1 || index > list.length) {
    m.reply("*❌ خطأ*\n*رقم ایة لیس متوفرا في قائمة ايات السورة*\n\n*رد علی قائمة ايات السورة اللتي فيها ارقام الايات المذكوره*");
  } else {
    const selectedObj = list[index - 1];

    // Check if the message is a reply and the quoted message id matches the key.id from the list
    await conn.sendMessage(m.chat, {
      audio: {
        url: selectedObj.audio.primary,
      },
      mimetype: "audio/mpeg",
      filename: "quran_audio.mp3",
      ptt: true,
    }, { quoted: m });

    clearTimeout(conn.quranData[m.chat].timeout);
    //delete conn.quranData[m.chat];
  }
};

handler.help = ['ayta'].map(v => v + ' *surah*')
handler.tags = ['islam']
handler.command = /^قران|أیات|ايه|اية|أية|ايات|آيه$/i;

export default handler;
