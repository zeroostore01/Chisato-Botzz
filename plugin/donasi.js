let handler = async m => m.reply(`
            .✵.HAI KAK INGIN DONASI?.✵.
            PULSA:085172446692
            DANA:085172446692
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
