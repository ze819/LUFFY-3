import FormData from "form-data";
import Jimp from "jimp";

let handler = async (m, { conn, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
conn.hdr = conn.hdr ? conn.hdr : {}
  if (m.sender in conn.hdr)
    throw "*〖⚠️تحذير⚠️〗*\n\n*انتضر بعض الوقت هناك تحميل معلق*"
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ""
  if (!mime)
    throw `*〖⚠️تنبيه⚠️〗*
*اين هيا الصوره الي تريد تحويلها جوده عاليه*`
  await conn.reply(m.chat, '*•┃❖جار رفع جوده الصوره..⏳*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: 'انضم الى جروب البوت', body: `انضم الى جروب البوت`, sourceUrl: 'https://chat.whatsapp.com/EXyr5e6pwTw7xhzXyGaUex', thumbnailUrl: 'https://chat.whatsapp.com/EXyr5e6pwTw7xhzXyGaUex' }}})
  if (!/image\/(jpe?g|png)/.test(mime))
    throw `Mime ${mime} tidak support`
  else conn.hdr[m.sender] = true;
  
  let img = await q.download?.()
  let error
  try {
    const This = await processing(img, "enhance")
    conn.sendFile(m.chat, This, "", "*「🐉𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒐𝒇𝒇𝒚١⁵🐉」*", m)
  } catch (er) {
    error = true
  } finally {
    if (error) {
      m.reply("error :(")
    }
    delete conn.hdr[m.sender]
  }
}

handler.help = ['hd']
handler.tags = ['tools', 'ai']
handler.command = /^(hd|جوده-عاليه|جوده|جودة)$/i

handler.register = false
handler.limit = false

export default handler

async function processing(urlPath, method) {
  return new Promise(async (resolve, reject) => {
    let Methods = ["enhance", "recolor", "dehaze"]
    Methods.includes(method) ? (method = method) : (method = Methods[0]);
    let buffer,
      Form = new FormData(),
      scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
    Form.append("model_version", 1, {
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data; charset=uttf-8",
    });
    Form.append("image", Buffer.from(urlPath), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg",
    });
    Form.submit(
      {
        url: scheme,
        host: "inferenceengine" + ".vyro" + ".ai",
        path: "/" + method,
        protocol: "https:",
        headers: {
          "User-Agent": "okhttp/4.9.3",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
        },
      },
      function (err, res) {
        if (err) reject();
        let data = [];
        res
          .on("data", function (chunk, resp) {
            data.push(chunk);
          })
          .on("end", () => {
            resolve(Buffer.concat(data));
          });
        res.on("error", (e) => {
          reject();
        });
      }
    );
  });
}
