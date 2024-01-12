const crypto = require('crypto');
const fs = require('fs')
 require('dotenv').config()

//console.log(process.env.HELLO_PRIVATE_KEY.replace(/\\n/g, '\n'))

fs.readFile("./.private_key.pem", function(err, data) {
    err ? console.log(data) : console.log("读取失败 " + err)
})

// console.log('keyBase64: ' + process.argv[1]);
// console.log('keyBase64: ' + process.argv[2]);
// console.log('keyBase64: ' + process.argv[3]);
// console.log('keyBase64: ' + process.argv[4]);
