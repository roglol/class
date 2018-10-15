let somePromise =  new Promise((resolve,reject) =>{
    setTimeout(() =>{
        // resolve('Hey. It worked')
        reject('Unable to fulfill promise')
    }, 2500)
})

somePromise.then((message) =>{
    console.log('Success: ', message)
}, (error) =>{
    console.log('Error: ', error)
})

