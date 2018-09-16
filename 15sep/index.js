const Mathfun = require('./mathfun');

let processResults = (err, result, time) =>{
    if(err){
        console.log(`Error: ${err.message}`)
    }
    else {
        console.log(`Result is - ${result}, time - ${time}`)
    }
}


for(let i = 0; i < 10; i++){
    console.log('Calling EventDoubler', i)
    Mathfun.eventDoubler(i, processResults)
}
console.log(Mathfun.maxTime)