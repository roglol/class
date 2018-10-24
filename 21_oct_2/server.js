const express = require('express');
const path = require('path');

const MoviesController = require('./routes/MoviesController');

const app = express();
app.use(express.urlencoded({ extended: true}))
app.use( express.json() );
app.use( express.static( path.join(__dirname, '/public') ) );

// /api/movies
// /api/movies/:id
app.use('/api/v1', MoviesController);
app.set('views', './src/views')
app.set('view engine', 'pug')

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
})
// app.get('/movies/edit', (req,res) =>{
//     res.sendFile(path.join(__dirname, '/public', 'edit.html'))
// })


app.listen(3000)