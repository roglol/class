const request = require('request')
const gzip = require('zlib')
const fs = require('fs')
let req = request('http://techhub.ge')

// req.pipe(process.stdout)

req.pipe(fs.createWriteStream('techub.html'))
req.pipe(gzip.createGzip()).pipe(fs.createWriteStream('techhub.html.gz'))