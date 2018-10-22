const express = require('express')
const app = express()

app.use(express.json())
const genres = [
   { id:1, name:'course1'},
   { id:2, name:'course2'},
   { id:3, name:'course3'},
]

app.get('/', (req,res) =>{
    res.send('Hello World')
})
app.get('/api/courses', (req,res) =>{
    res.send(genres)
})
app.post('/api/courses', (req,res) =>{
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }
    genres.push(genre)
    res.send(genre)
})
app.put('/api/courses/:id', (req,res) =>{
    const genre = genres.find((el) =>el.id === parseInt(req.params.id))
     if(!genre) res.status(404).send('The course with given ID was not found')
     genre.name = req.body.name
     res.send(genre)
})
app.get('/api/courses/:id', (req,res) =>{
     const genre = genres.find((el) =>el.id === parseInt(req.params.id))
     if(!genre) res.status(404).send('The course with given ID was not found')
     res.send(genre)
})
app.delete('api/courses/:id', (req,res) =>{
    const genre = genres.find((el) =>el.id === parseInt(req.params.id))
    if(!genre) res.status(404).send('The course with given ID was not found')
    const index = genres.indexOf(genre)
    genres.splice(index,1)
    res.send(genre)
})




app.listen(3000, () => console.log('chairto es dedamotynuli'))