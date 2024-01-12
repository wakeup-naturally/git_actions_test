const crypto = require('crypto');
const fs = require('fs')
 require('dotenv').config()

console.log(process.env.HELLO_PRIVATE_KEY.replace(/\\n/g, '\n'))

// console.log('keyBase64: ' + process.argv[1]);
// console.log('keyBase64: ' + process.argv[2]);
// console.log('keyBase64: ' + process.argv[3]);
// console.log('keyBase64: ' + process.argv[4]);
