const express = require('express')
const app = express()
const path = require('path')
let persons = []
let cars = []

app.use(express.urlencoded({ extended: true}))
app.set('views', './src/views')
app.set('view engine', 'pug')


app.get('/', (req,res)=>{
      res.render('index', {})
})

app.post('/', (req,res)=>{
      const { name, surname,id, birthday,park=[]} = req.body;
      if(id){
            persons.push( {id, name,surname, birthday, park} )
      }
      const {mark,model,vin,number,color,personId} = req.body;
      const person = persons.find((per)=> +per.id ===parseInt(personId))
      if(vin){
            cars.push({vin,number,mark,model,color,person})
            let index = persons.findIndex((per)=> +per.id ===parseInt(personId))
            persons[index].park.push({vin,number,mark,model,color})
      }
      console.log(persons)
      // console.log(persons)
      res.render('index')
})
app.post('/persons', (req,res)=>{
      const  id = req.body.id;
      const person = persons.find( (per)=> +per.id === parseInt(id))
      res.render('person',{
            person:person
      })
      
})
app.post('/cars', (req,res)=>{
      const  vin = req.body.vin;
      const car = cars.find( (c)=> +c.vin === parseInt(vin))
      res.render('cars',{
            car:car
      })
      
})
app.post('/persons/edit', (req,res)=>{
      // const { name, surname,id, birthday } = req.body;
      // persons.push( {id, name,surname, birthday} )
      // const person = persons.find( (per)=> +per.id === parseInt(id))
      // console.log(persons)
      // res.render('person',{
      //       person:person
      // })
      const  ide = req.query.ide;
      console.log(ide)
      const person = persons.find( (per)=> +per.id === parseInt(ide))
      person.name = req.body.name || person.name
      person.surname = req.body.surname || person.surname
      person.id = req.body.id || person.id 
      person.birthday = req.body.birthday || person.birthday
      person.park = person.park
      const index = persons.findIndex((per) => +per.id === parseInt(ide))
      console.log(index)
      persons.splice(index,1,person )
      console.log(person)
      console.log(persons)
      res.render('index')


      
      
})

app.listen(3000)