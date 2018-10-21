const express = require('express')
const path = require('path')
const app = express()
const countries = require('./countries')

app.use( express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, '/node_modules/jquery')))
app.set('views', './src/views')
app.set('view engine', 'pug')
let PORT  = process.env.PORT || 3000


app.get('/countries/:prefix', (req,res)=>{
  if( !req.params.prefix){
      return res.sendStatus(400)
  }
      let prefix = req.params.prefix.toUpperCase();
      let result = countries.filter(country =>
          country.name.toUpperCase().startsWith(prefix)).map(country =>country.name)
    res.json(result)
})

app.get('/', (req,res) =>{
        // if(!req.query.num_1 || !req.query.num_2) {
        //     res.sendStatus(400)
        // }
        // let num_1 = Number(req.query.num_1)
        // let num_2 = Number(req.query.num_2)
        // let result = num_1 + num_2
        //  setTimeout( () =>{
        //     res.send(result.toString())
        // },2000)
        res.render()
       
        var primes=0; 
        var isprime = true;
        // for (var counter = num_1; counter <= num_2; counter = counter + 1)
        // {
        //     // For now, we believe that it is a prime
        //     isprime = true;
        //     var limit = Math.round(Math.sqrt(counter)); // See comment from @AresAvatar, below
        //     // We try to find a number between 2 and limit that gives us a reminder of 0
        //     for (var mod = 2; mod <= limit; mod++) {
        //         // If we find one, we know it's not a prime
        //         if (counter%mod == 0) {
        //             isprime = false;
        //             break; // Break out of the inner for loop
        //         }
        //     }
        
        //     if (isprime) {
        //         primes = primes + 1;
        //     }
        // }

        // setTimeout( () =>{
        //     res.send(primes.toString())
        // },2000)


})

app.listen(PORT, () =>{
    console.log(`Port -  ${PORT}`)
})





