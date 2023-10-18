const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6287705048235@s.whatsapp.net"]
global.nomerOwner = "6287705048235"
global.nomorOwner = ['6287705048235']
global.namaDeveloper = "KirBotz"
global.nameGEDE = "KIRBOTZ"
global.namaBot = "KirBotz WhatsApp"
global.packname = ""
global.wame = "https://wa.me/settings"
global.author = "Sticker By KirBotz"
global.ovo = "0877-0504-8235" // isi nomor ovo lu
global.dana = "GAK ADA KE BLOCK" // isi nomor dana lu
global.gopay = "0877-0504-8235" // isi nomor gopay lu
global.shopeepay = "0877-0504-8235" // isi nomor shopeepay lu
global.pulsa = "0857-9814-5596" // isi nomor kartu lu
global.thumb = fs.readFileSync("./thumb.png")
global.thumbqris = fs.readFileSync("./qris.jpg")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Base Ori By KirBotz
Ubah Nomor Owner?
Ganti Di File ./owner.json
Harap Jangan Jual Sc Ini
Karena Sc Ini Free Langsung Dari
Youtube : https://youtube.com/@kangbotwhatsapp

*/