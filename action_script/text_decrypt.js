const crypto = require('crypto');
const fs = require('fs')
const path = require('path')
require('dotenv').config()

function getAlgorithm(keyBase64) {
    var key = Buffer.from(keyBase64, 'base64');
    //console.log('getAlgorithm: ' + key.length);
    switch (key.length) {
        case 16:
            return 'aes-128-cbc';
        case 24:
            return 'aes-192-cbc';
        case 32:
            return 'aes-256-cbc';

    }
    throw new Error('Invalid key length: ' + key.length);
}

function aesDecryptSync1() {
    const aesDataFilePath = "./.aes_encrypted_txt"
    let decryptedText = ""
    try {
        const priKeyFilePath = "./.private_key"
        //console.log("rsaDecrypt| " + priKeyFilePath)
        
        var privatKeyData = fs.readFileSync(priKeyFilePath, "utf8").toString()
        var privatKey = crypto.createPrivateKey(privatKeyData)

        var lineNumber = 0
        let decipher;
        const fileContent = fs.readFileSync(aesDataFilePath, 'utf8');
        fileContent.split('\n').forEach(line => {
            //console.log("aesDecryptSync|=========================== ")
            //console.log("aesDecryptSync| " + lineNumber)
            //console.log("aesDecryptSync| " + line)
            let encryptedContent = line;
            if (encryptedContent != null && encryptedContent.replace('/(^s*)|(s*$)/g', "").length != 0) {
                if (lineNumber == 0) {
                    lineNumber++
                    var aesDecryptedBase64 = decryptedContent = crypto.privateDecrypt(
                        {
                            key: privatKey
                        },
                        Buffer.from(encryptedContent, 'base64')).toString('utf8')
                    console.log("aesDecryptSync aesDecryptedBase64| " + aesDecryptedBase64)
                    let aesKeyIvBase64 = aesDecryptedBase64.split(':')
                    let aesKeyBase64 = aesKeyIvBase64[0]
                    let aesIvBase64 = aesKeyIvBase64[1]
                    //console.log("aesDecryptSync aesKeyBase64| " + aesKeyBase64)
                    //console.log("aesDecryptSync aesIvBase64| " + aesIvBase64)
        
                    const key = Buffer.from(aesKeyBase64, 'base64');
                    const iv = Buffer.from(aesIvBase64, 'base64');
                    decipher = crypto.createDecipheriv(getAlgorithm(aesKeyBase64), key, iv);
                } else {
                    lineNumber++
                    decryptedText += decipher.update(encryptedContent, 'base64', 'utf8');
                    decryptedText += decipher.final('utf8') + "\n";
                }
            }
        });
    } catch (err) {
        //console.log("读取失败 " + err)
    }
    return decryptedText
}

let test_decrypt_base64 = aesDecryptSync1()
// console.log(test_decrypt_base64);
console.log(test_decrypt_base64.replaceAll('<', '\<'));
