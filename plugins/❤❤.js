const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveDescription = isHighLove ? "" : "";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const response =
    `*〚══════─💻─══════〛*\n` +
    `*${text} تـم اخــتـراقـك بـنـجـاح وتم نقل بـيـانـاتـك لـلـمـطـور*` +
    `\n*〚══════─💻─══════〛*` +
    ``    

  async function loading() {
var hawemod = [
"*جــار بــدء الاخــتـراق*",
"*جــار الــبدء  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0%*",
"*جار تــحـمــيـل الفيديوهات █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 10 %*",
"*تـم تـحـمـيـل الفيديوهات بــنـجـاح  ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 20 %*",
"*جــار تــحـمـيــل الصور  ███▒▒▒▒▒▒▒▒▒▒▒▒▒ 30 %*",
"*تـــم تــحــمــيـل الصور  ████▒▒▒▒▒▒▒▒▒▒▒▒ 40 %*",
"*جــار تحـمـيـل الاصـوات  █████▒▒▒▒▒▒▒▒▒▒▒ 50 %*",
"*تــم تحـمـيـل الاصـوات  ██████▒▒▒▒▒▒▒▒▒▒ 60 %*",
"*جـار تـحـمـيـل المـلـفـات  ███████▒▒▒▒▒▒▒▒▒ 80 %*",
"*تــم تـحـمـيـل المــلـفـات  ████████▒▒▒▒▒▒▒▒ 85 %*",
"*جاري تـحـمـيـل الــمحـادثـات   █████████▒▒▒▒▒▒▒ 90 %*",
"*تم تـحـمـيـل الـمـحـادثـات   ███████████▒▒▒▒▒ 95 %*",
"*يـتـم التجهيز للاختراق   ████████████▒▒▒▒ 96 %*",
"*جـار نقل بياناتك الى المطور  █████████████▒▒▒ 97 %*",
"*تــم النقل بــنــجــاح  ██████████████▒▒ 98 %*",
"*تـمت عمليه الاختراق بــنــجــاح  ████████████████ 100 %*",
"*جــار حــفـظ بــيـانـات الــضـحــيه*",
"*تــمت العمليه مع 0 من الاخطاء*"
]
   let { key } = await conn.sendMessage(m.chat, {text:`*جـار التحمـيل*`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['hack'];
handler.tags = ['fun'];
handler.command = /^(اختراق|تهكير)$/i;
handler.rowner = true
export default handler;
