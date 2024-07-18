import FormData from "form-data";
import Jimp from "jimp";

let handler = async (m, { conn, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	switch (command) {
		case "فلتر":
			{
				conn.enhancer = conn.enhancer ? conn.enhancer : {};
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `*[❗ملاحضه❗]*\n*اين الصوره الي بتعمل ليها فلتر*\n*اذا واجهتك مشكله  او تاخر استخدم الامر التالي*. *recolor✅*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} not support`;
				else conn.enhancer[m.sender] = true;
				m.reply(wait);
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "فلتر");
					conn.sendFile(m.chat, This, "", "*「🐉𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒐𝒇𝒇𝒚١🐉」*", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("*فشلت العملية*");
					}
					delete conn.enhancer[m.sender];
				}
			}
			break;
		case "recolor":
			{
				conn.recolor = conn.recolor ? conn.recolor : {};
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `*[❗ملاحضه❗]*\n*اين الصوره الي بتعمل ليها فلتر*\n*اذا واجهتك مشكله  او تاخر استخدم الامر التالي*. *recolor✅*`;
				await conn.reply(m.chat, '*انتضر جار عمل فلتر لصوره*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})
			
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} tidak support`;
				else conn.recolor[m.sender] = true;
					let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "recolor");
					conn.sendFile(m.chat, This, "","*「🐉𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒐𝒇𝒇𝒚١⁵🐉」*", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("*فشلت العملية*");
					}
					delete conn.recolor[m.chat];
				}
			}
			break;
		case "hd":
			{
				conn.hdr = conn.hdr ? conn.hdr : {};
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `ارسل للبوت اي صورة وسوف يقوم برفع جودتها لتصبح HD\n\nارسل الصورة تم أشر اليها واكتب \n*.hd*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} tidak support`;
				else conn.hdr[m.sender] = true;
				await conn.reply(m.chat, '*انتضر جار عمل فلتر لصوره*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, sourceUrl: nn,thumbnail: '' }}})
			
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "*「🐉𝑴𝒐𝒏𝒌𝒆𝒚 𝑫 𝑳𝒐𝒇𝒇𝒚١⁵🐉」*", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("*فشلت العملية*😣");
					}
					delete conn.hdr[m.sender];
				}
			}
			break;
	}
};
handler.help = ["فلتر","recolor","hdr"];
handler.tags = ["tools"];
handler.command = ["فلتر","recolor","hd"];
export default handler;

async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "فلتر"];
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
