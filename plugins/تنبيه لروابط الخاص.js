export async function all(m) {
	
  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`اهلا يا @${m.sender.split('@')[0]}\n*اذا اردت البوت الى نقابتك او جروبك*\n\n*كـلـم الـمـطـور اذا اردت رقم المطور*\n*عن* \`\`\`*طريق*\`\`\` *كتابه الامر التالي .المطور*`.trim()}, {quoted:m});
   m.react(done)
} 

 return !0
}
