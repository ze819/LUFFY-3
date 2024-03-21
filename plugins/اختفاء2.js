export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
*[🍷اهلا وسهلا بك🍷]*
*رجع من الاختفاء* ${user.afkReason ? '*بعد الاختفاء سبب الاختفاءكان>'+user.afkReason :''}*
  
*•┃❖ مده الاختفاء: ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*[❗] المستخدم مفعل الاختفاء الان[❗]*

*•┃❖المستخدم غير نشط الان*      
*•┃❖${reason ? 'سبب الاختفاء: ' + reason : 'سبب الاختفاء : _لم يتحدد سببا_'}*
*•┃❖وقت الاختفاء${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}