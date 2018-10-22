// console.log('Before')
// getUser(1, function(user){
//     console.log('User', user)
// })
// getRepositories('Gia', function(repo){
//     console.log('Repo', repo)
// })
// console.log('After')

// function getUser(id,callback){
//     setTimeout(() =>{
//         console.log('Reading a user from a database..')
//         callback({ id:id, gitHubUsername: 'mosh'}) 
//     },2000)
// }

// function getRepositories(username,callback){
//     setTimeout(() =>{
//        callback({ username:username, repositories:['repo1', 'repo2', 'repo3']})
//     },2000)
// }


const p = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject(new Error('messageeeeeeee'))
        // resolve(1);
    }, 2000)
    // reject(new Error)
})
p
   .then(result => console.log(result))
   .catch(error => console.log(error.message))
