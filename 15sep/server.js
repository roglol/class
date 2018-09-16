// const http = require('http')
// let date = new Date()
// http.createServer( (req, res) => {
//     res.write(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
//     res.end()
// }).listen(9000)

const express = require('express')
const path = require('path')
const debug = require('debug')('app')
const chalk = require('chalk')
const morgan = require('morgan')
let app = express()
let port = 3000;
app.use( express.static('public'))
app.use( express.static('src/view'))
app.use(morgan('combined'))

app.use( '/css' , express.static( path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use( '/js' , express.static( path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use( '/js' , express.static( path.join(__dirname, '/node_modules/bootstrap/dist/')))
app.get('/', (req, res) =>{
    // res.send('Hello Express');
    res.sendfile( path.join(__dirname, '/view/', 'index.html'))
})
app.get('/products', (req, res) =>{
    res.send('Hello Products');
})

app.listen(port, (err) =>{
    // console.log(`listening on port - ${port}`)
    debug(`listening on port - ${chalk.green(port)}`)
})                                                                                                                                                                                                                                 