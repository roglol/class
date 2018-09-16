const request = require('request')
let chalk = require('chalk')
let req = request('http://techhub.ge')

req.on('data', (resp) =>{
    console.log(`Data - ${resp}`)
})

req.on('end', () =>{
    console.log(chalk.yellow("request end."))
})

