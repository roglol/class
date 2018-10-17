const express = require('express')
const path = require('path');
const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join( __dirname, 'public', )))
const productsRoutes = require('./src/routes/productsRoutes')
let productsDB = []
const router = express.Router()

// app.get('/calc', (req, res) => {
//     let num_1 = parseFloat(req.query.num_1);
//     let num_2 = parseFloat(req.query.num_2);
//     let operator = req.query.operation;

//     switch(operator){
//         case '+':
//         res.send(`${num_1+num_2}`)
//         break;

//         case '-':
//         res.send(`${num_1-num_2}`)
//         break;

//         case '*':
//         res.send(`${num_1*num_2}`)
//         break;

//         case '/':
//         res.send(`${num_1/num_2}`)
//         break;
//     }
//    res.sendFile('davaleba.html', { root: path.join( __dirname, 'public', )} );
// })

app.set('views', './src/views')
app.set('view engine', 'pug')
app.use('/products',productsRoutes)

// app.get('/', function(req,res) {
//     res.render('index', {title: 'Hey', message: 'Hello there!'})
// })
app.get('/', (req, res) => {
    res.render('index', { 
        title: "DEMO Title", 
        added: false, 
        productsDB })
})



app.post('/', (req, res) => {
    const { product_name, product_price, product_id } = req.body;
    productsDB.push( {product_id, product_name, product_price} )
    res.render('index', {
        title: "DEMO Title", 
        added: true,
        productsDB})
})
app.get('/products', (req,res)=>{
    res.render('product/index', {
        title: "Product Page", 
        added: true,
        productsDB})
})

// app.get('/', (req,res)=>{
//     res.sendFile('davaleba.html', { root: path.join( __dirname, 'public', )} )
// })
// let sheinaxeaka = []

// app.post('/register', (req,res) =>{
//      let productiaesa = {
//          id: req.body.id,
//          name:req.body.name,
//          price: req.body.price
//      }

//         sheinaxeaka.push(productiaesa)
//         res.send("Product Added Successfuly! <a href='http://localhost:3000'>BACK</a>")
// })
// app.get('/products', (req,res)=>{
//    res.send(
//        sheinaxeaka.map( product =>{
//             return `<p> id - ${product.id}, name-${product.name}, price-${product.price}</p>`
//        }).join(` `)
//    )
// })



// let id = 0;
// let products = [{name:'Apple', id: id++, price: 4000}, 
//                 {name:'Samsung', id: id++, price: 3500}
//             ]

// //query string
// app.get('/products', (req,res)=>{
//    res.send(
//        products.map( product =>{
//             return `<h2 id ="product-${product.id}" 
//             data-id="${product.id}" 
//             onclick="window.location.replace('http://localhost:3000/products/${product.id}')">
//             ${product.name}
//             </h2>`
//        }).join(``)
//    )
// })
// app.get('/products/:productId', (req,res)=>{
//     const id = req.params.productId;
//     const product = products.find(prod => prod.id == id);
//     let response ='product not found'
//     if(product){
//          response = `
//         <a href="http://localhost:3000/products/">Go Back</a>
//         <h1>${product.name}</h1>
//         <hr>
//         <h2>Price $ ${product.price}, Id - ${product.id}</h2>
//         `
//     }
    

//     res.send(response)
// })

// app.delete('/products/:id', (req,res)=>{
//     const id = products.findIndex( p => p.id == req.params.id)
//     const product = products[id]
//     products.splice(id,1)
//     res.json({message: "product deleted", product})
// })

app.listen(3000)
// // localhost:3000/users/5?

// app.post('/products/:id/:name/:price', (req,res)=>{
//     let product = {
//         id:req.params.id,
//         name:req.params.name,
//         price:req.params.price
//     }
//     products.push(product)
//     res.json( {message: "product created", product} )
// })