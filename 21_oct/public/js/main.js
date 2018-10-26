// const addBtn = document.getElementById('addBtn') 
// const prefixInput =document.getElementById('countryName')
// const countriesList= document.getElementById('countries')
const get = document.getElementById('btn')
const movies = document.getElementById('moviesList')
get.addEventListener('keyup', ({target})=>{
    tar = target.value.toUpperCase()
    const url = `https://www.googleapis.com/books/v1/volumes?q=${tar}`
    fetch(url, {
        method: 'GET'
   })
   .then(response => response.json())
   .then(books => {
    console.log(books)
            if(books){
          movies.innerHTML = books.items.map( book => 
          `<tr>
          <td>${book.volumeInfo.title}</td>
          <td>${book.volumeInfo.authors[0]}</td>
          <td>${book.volumeInfo.publisher}</td>
          <td>${book.volumeInfo.publishedDate}</td>
          </tr>`).join(` `)
            }
           
    })
    .catch( err => console.log(err))
console.log(target.value)
     
})
// addBtn.addEventListener('click', ({target}) =>{
//     let num_1 = document.getElementById('num_1').value
//     let num_2 = document.getElementById('num_2').value
//      let result = document.getElementById('result')
//      let loader = document.getElementById('loader')
//     let url = `/add?num_1=${num_1}&num_2=${num_2}`
//     showLoader(loader)
    
    // fetch(url, {
    //     method: 'GET',
    //     })
    //     .then( res =>{
    //         return res.text()
    //     })
    //     .then( data =>{
    //         console.log(data)
    //         result.innerHTML = `Sum is ${data}`
    //     })
    //     .finally(() =>{
    //         loader.classList.remove('loader--show')
    //         loader.classList.add('loader--hide')
    //     })
    //     .catch( err =>{
    //         console.error(err)
    //     })

    // $.ajax({
    //     url:'/add',
    //     method: 'GET',
    //     data: {num_1, num_2}
    // })
    // .done( data =>{
    //     result.innerHTML = `Sum is ${data}`
    // })
    // .always(() =>{
    //     hideLoader(loader)
    // })
    
// })
// prefixInput.addEventListener('keyup', ({target}) =>{
//      const minlength = Number(target.dataset.minlength);
//      countriesList.innerHTML = ''
//      if(target.value.length > minlength){
//          const url = `/countries/${target.value}`
//          fetch(url, {
//              method: 'GET'
//         })
//         .then(response => response.json())
//         .then(countries => {
//             if(countries.length > 0){
//                 countriesList.innerHTML = countries.map( name => `<option value="${name}">`).join(` `)
//             }
//         })
//         .catch( err => console.log(err))
//      }
// })

// function showLoader(loader){
//     loader.classList.add('loader--show')
//     loader.classList.remove('loader--hide')
// }
// function hideLoader(loader){
//     loader.classList.remove('loader--show')
//     loader.classList.add('loader--hide')
// }

