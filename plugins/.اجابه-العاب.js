import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/̣/i.test(m.quoted.text) || /.*htek/i.test(m.text))
        return !0
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki))
        return conn.reply(m.chat, '*❖┃هــاذا الــســؤال قــد انــتـهـى┃☑️❯*', m)
    if (m.quoted.id == this.tekateki[id][0].id) {
        let isSurrender = /^((me)?انسحب|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
            return conn.reply(m.chat, '*❖┃طـلـع غـبـي و انســحــب┃⚠️ ❯*', m)
        }
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2]
            conn.reply(m.chat, `*❐┃اجـابـة صـحـيـحـة┃✅ ❯*\n*❐↞┇الـجـائـزة💰↞* *${this.tekateki[id][2]}* *نقطه┇❯*`, m)
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*❖┃اقـربـت مـن الاجـابـه┃🚸 ❯*`)
        else
            conn.reply(m.chat, `*❐┃اجـابـة خـاطـئـة باكا┃❌ ❯*`, m)
    }
    return !0
}
export const exp = 0
