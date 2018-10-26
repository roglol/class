class Movie {
    constructor() { 
        this.movies = [] 
    } 
    getAllMovies() { 
        return this.movies; 
    } 
    getMovieById(movieId) { 
        let arr = []
        arr.push(this.movies.find(m => m.title == movieId));
        return arr  
    } 
    addMovie(movie) { 
        this.movies.push(movie); 
    } 
    updateMovie(movieId, movie) { 
        idx = this.movies.findIndex(m => m.title == movieId); 
        this.movies[idx] = movie; 
    } 
    deleteMovie(movieId) { 
        idx = this.movies.findIndex(m => m.id == movieId); 
        this.movies.splice(idx, 1); 
    } 
}
module.exports = Movie