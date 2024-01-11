const crypto = require('crypto');
const fs = require('fs')

var file = fs.readdirSync("private-key.pem", 'utf8')

console.log('keyBase64: ' + file.text);
// console.log('keyBase64: ' + process.argv[1]);
// console.log('keyBase64: ' + process.argv[2]);
// console.log('keyBase64: ' + process.argv[3]);
// console.log('keyBase64: ' + process.argv[4]);
