window.onload = () => {
let moviesURL = '/api/v1/movies'
const moviesListElement = document.getElementById('moviesList')
const btnAddMovie = document.getElementById('btnAddMovie')
const searchMovie = document.getElementById('searchMovie')
const edit = document.getElementById('edit')

searchMovie.addEventListener('click', function(){
    let title = document.getElementById('search').value
    let url = `/api/v1/movies/${title}`
    fetchData(url, render, moviesListElement)
})
btnAddMovie.addEventListener('click', function(){
    let movie = {
        title:document.getElementById('title').value,
        description:document.getElementById('description').value,
        genre:document.getElementById('director').value,
        year: document.getElementById('year').value
    }
    console.log(movie)
    addMovie(moviesURL,movie)
    
})
function addMovie(url,movie){
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      })
      .finally(function(){
        fetchData(moviesURL, render, moviesListElement)
      })

 }
}
function getTemplate(url){
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      })
      .then( data => data.json())
      .then( data => {
             console.log('RESPONSE', data)
      })
      .catch( arr => console.log(arr))
 }


function render(data, element){
         if(data.length){
             const html = data.map(item => `
             <tr>
                <td>${item.title}</td>
                <td>${item.description}</td>
                <td>${item.genre}</td>
                <td>${item.year}</td>
                <td><form action='http://localhost:3000/api/v1/movies/edit/${item.title}' method='post'>
                <button type='submit'>Edit</button>
                </form></td>
            </tr>
           `).join(' ')
            element.innerHTML = html
         }
        //  edit.addEventListener('click',function(){
        //      console.log(edit.dataset.title)
        //      let title = edit.dataset.title
        //      let url = `/api/v1/movies/edit/${title}`
        //      addMovie(url,title)
        //  })
         
}

   function fetchData(url, callback,element){
         fetch(url, {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           }
         })
         .then( data => data.json())
         .then( data => {
             console.log('RESPONSE', data)
             callback(data,element)
         })
         .catch( arr => console.log(arr))

}

