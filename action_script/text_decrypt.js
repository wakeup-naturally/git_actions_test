const crypto = require('crypto');
const fs = require('fs')
const path = require('path')
 require('dotenv').config()

//console.log(process.env.HELLO_PRIVATE_KEY.replace(/\\n/g, '\n'))

// fs.readFile(".env", "utf8", function(err, data) {
//     if (err) {
//         console.log("读取失败 " + err)
//     } else {
//         console.log("读取成功 ")
//     }
// })

var filesPath = ""
var filesCnt = 0
function traverseFoler(folderPath) {
    const files = fs.readdirSync(folderPath)
    files.forEach(function(fileName) {
        filesCnt++
        filesPath += decodeURIComponent(fileName) + "\n"
        //console.log("file: " + decodeURIComponent(fileName))
        // const filePath = path.join(folderPath, fileName)
        // const stats = fs.statSync(filePath)
        // console.log("filePath: " + filePath)
        // if (!stats.isFile) {
        //     traverseFoler(filePath)
        // } else {
        //     //console.log("file: " + filePath)
        //     filesPath += filePath + "\n"
        // }
    })
}

//traverseFoler('./')
//console.log("filesPath " + filesCnt)

//const stats = await util.promisify(fs.stat)('./.private_key');
//console.log(stats.isDirectory()); // false
//console.log(stats.isFile()); // true

const filePath = "./.private_key"
const stats = fs.statSync(filePath)
//console.log("filesPath " + stats.isFile())

const pubKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs//UmD77Ge9R6AzSW34A
6ppuQWEKdKcVdi0qABWdSqyGTj/Bco614ZDg43pQ39tpF+sminB1R7OlM/S+AV+F
36Jy8Z9rN2H1KwJpLBWYsVSNLh9DOHxXPXOxum7E6uj6uUwoG/1rmmdu8MKe++BH
e+WbPjStqspCFNFkdby2Ebd6nsB6c/J+ymQgnVmDkGM310gJwOuW/U2B0Tps5sVX
rRu9o4lN40tFJIVcN7A2YK3lvqpI92qHZ0Es2GDVzzCzfHDBWJOrZ9J0/2So6TaC
hheze+SVcQ6Y4WiltBOLobGKgvQru7rfj7yDhQM/NXywbTDajOlYRiW/TTS4WaRr
xQIDAQAB
-----END PUBLIC KEY-----`
const message = "hello,world!GoGOGO"
const buffer = Buffer.from(message, 'utf8')
const encrypt = crypto.publicEncrypt(pubKey, buffer).toString('base64')


fs.readFile(filePath, "utf8", function(err, data) {
    if (err) {
        console.log("读取失败 " + err)
    } else {
        // const decrypt = crypto.privateDecrypt(
        //     data,
        //     Buffer.from(encrypt, 'base64')).toString('utf8')
        console.log("读取成功 " + data)
    }
})

// console.log('keyBase64: ' + process.argv[1]);
//console.log('issue body ' + process.argv[2]);
// console.log('keyBase64: ' + process.argv[3]);
// console.log('keyBase64: ' + process.argv[4]);
