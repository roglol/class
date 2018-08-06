let usersEndPoint = 'https://jsonplaceholder.typicode.com/users';
let storage=window.localStorage
fetch(usersEndPoint, {
    method: 'get'
})
.then((response)=>{
    if( response.status === 200){
      
        storage.setItem('users', JSON.stringify(usersList))
     
    }
})
.then(usersList => {
        document.body.innerHTML = usersList.map( user => {

            return `<div data-user-id = '${user.id}' >
                    <h2>${user.name}<small> Id - ${user.id}</small></h2>
                    <button type="button" class = 'button2'>Edit</button>
                    <button type="button" class = 'button1'>Remove</button>
            </div>`
        }).join('');
    

    let button1 = document.querySelectorAll('.button1')
    button1.forEach(element =>{
        element.addEventListener('click' , (event) =>{
            event.target.closest('div').remove()
        })
    })
    let button2 = document.querySelectorAll('.button2')
    button2.forEach(element =>{
        element.addEventListener('click', (event) =>{
            let x = prompt('enter data')
            // event.target.previousSibling.append('ex')
     })

    })

})



    