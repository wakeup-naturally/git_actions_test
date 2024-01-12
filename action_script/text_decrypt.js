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
function traverseFoler(folderPath) {
    const files = fs.readdirSync(folderPath)
    files.forEach(function(fileName) {
        const filePath = path.join(folderPath, fileName)
        const stats = fs.statSync(filePath)
        console.log("filePath: " + filePath)
        if (!stats.isFile) {
            traverseFoler(filePath)
        } else {
            //console.log("file: " + filePath)
            filesPath += filePath + "\n"
        }
    })
}

traverseFoler('./')
console.log("filesPath: " + filesPath)

// console.log('keyBase64: ' + process.argv[1]);
// console.log('keyBase64: ' + process.argv[2]);
// console.log('keyBase64: ' + process.argv[3]);
// console.log('keyBase64: ' + process.argv[4]);
