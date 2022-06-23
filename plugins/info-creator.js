function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Ryan Gantwng;;;FN:Ryan Ganteng\nORG:Ryan Ganteng;\nTEL;type=CELL;type=VOICE;waid=6282252285143:+62 822-5228-5143\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6282252285143', '𝚈𝚊𝚗𝚗 𝚃𝚞𝚛𝚞😎☝️', m)
m.reply(m.chat,'*My Owner Number Chat If Important!*\n**', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
