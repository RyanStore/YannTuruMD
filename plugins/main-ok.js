let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "𝚈𝚊𝚗𝚗 𝚃𝚞𝚛𝚞", author: "@ryannn.store" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
