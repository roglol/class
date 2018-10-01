// const http = require('http');
const express = require('express')

const app = express()


// http.createServer( (request, response) =>{
//     response.write('Hello World')
//     response.end()
// })
// .listen(3000);

app.get('/', (req, res) =>{
    res.send('Express Hello World.. vaiiii')
})

app.get('/products/:productId', (req,res) =>{
    res.send(`Products GET METHOD...${req.params.productId}`)
})
app.get(`/users/:userId/books/:bookId`, (req,res) =>{
    res.send(`UserId - ${req.params.userId}, BookId - ${req.params.bookId}`)
})
app.post('/products', (req,res) =>{
    const name = req.param('name')
    res.send(`Posted name ${name}` )
})
app.put('/products', (req,res) =>{
    res.send("Products PUT METHOD")
})
app.delete('/products', (req,res) =>{
    res.send("Products DELETE METHOD")
})
app.listen(3000)