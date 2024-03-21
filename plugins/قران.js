import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';

let quranSurahHandler = async (m, { conn, usedPrefix, command }) => {
  try {
    let surahInput = m.text.split(' ')[1];

    if (!surahInput) {
      throw new Error(`*يرجى تحديد رقم السورة*\n\n    *${usedPrefix + command}* 1`);
    }

    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran');
    let surahList = await surahListRes.json();

    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    );

    if (!surahData) {
      throw new Error(`*تعذر العثور على سورة برقم أو اسم "${surahInput}"*`);
    }

    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`);
    
    if (!res.ok) {
      let error = await res.json(); 
      throw new Error(`*خطاء في${res.status} الرساله ${error.message}*`);
    }

    let json = await res.json();


    // Translate tafsir from Bahasa Indonesia to AR
    let translatedTafsirar = await translate(json.data.tafsir.id, { to: 'ar', autoCorrect: true });

    let quranSurah = `
🕌 *القرآن: الكتاب المقدس*\n
📜 *سورة ${json.data.number}: ${json.data.asma.ar.long}*\n
🕋 *النوع: ${json.data.type.ar}*\n
🔢 *عدد الآيات: ${json.data.ayahCount}*\n
🧾 *التوضيح (عربي):*\n
${translatedTafsirar.text}*`;

    m.reply(quranSurah);

    if (json.data.recitation.full) {
      conn.sendFile(m.chat, json.data.recitation.full, 'quran.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    }
  } catch (error) {
    console.error(error);
    m.reply(`*[❗تنبـيـه❗]*
 ${error.message}`);
  }
};

quranSurahHandler.help = ['quran [surah_number|surah_name]'];
quranSurahHandler.tags = ['quran', 'surah'];
quranSurahHandler.command = ['quran', 'surah','القران','قران','القرآن','قرآن']

export default quranSurahHandler;
