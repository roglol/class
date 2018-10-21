const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')
const MovieService = new Movie()

router.route('/movies').get( (req,res) =>{
    let movies = MovieService.getAllMovies()
    res.json(movies)

})

router.route('/movies/:id').put((req,res) =>{
    if(!req.params.id || !req.body){
        res.sendStatus(400)
    }
    let movieId = req.params.id;
    let movie = req.body
    MovieService.updateMovie(movieId);
    res.send({message: `Movie ${movieId} has been updated`})
})
