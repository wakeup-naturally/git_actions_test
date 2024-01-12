const crypto = require('crypto');
const fs = require('fs')
 require('dotenv').config()

//console.log(process.env.HELLO_PRIVATE_KEY.replace(/\\n/g, '\n'))

fs.readFile(".env", "utf8", function(err, data) {
    if (err) {
        console.log("读取失败 " + err)
    } else {
        console.log("读取成功 ")
    }
})

// console.log('keyBase64: ' + process.argv[1]);
// console.log('keyBase64: ' + process.argv[2]);
// console.log('keyBase64: ' + process.argv[3]);
// console.log('keyBase64: ' + process.argv[4]);
