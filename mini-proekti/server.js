const express = require('express')
const app = express()
const path = require('path')
let persons = []

app.use(express.urlencoded({ extended: true}))
app.set('views', './src/views')
app.set('view engine', 'pug')


app.get('/', (req,res)=>{
      res.render('index', {})
})

app.post('/', (req,res)=>{
      const { name, surname,id, birthday } = req.body;
      persons.push( {id, name,surname, birthday} )
      res.render('index')
})
app.post('/persons', (req,res)=>{
      const  id = req.body.id;
      const person = persons.find( (per)=> +per.id === parseInt(id))
      console.log(person)
      res.render('index')
      
})

app.listen(3000)