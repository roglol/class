const fs = require('fs');
const path = require('path');
const express = require('express');

const data = require('./data/data.json')

const app = express();
let id = 0;

<<<<<<< HEAD
app.set('port', ( process.env.PORT || 3000 ) );
=======
app.set('port', ( process.env.PORT || 9000 ) );
>>>>>>> f18f9440540c43c841420b6fafd3d6d7325120cc
app.use( express.static( path.join(__dirname, 'public') ) );
app.use( express.urlencoded( { extended: true}))
app.use( express.json() );

app.use( (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
<<<<<<< HEAD
=======
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
>>>>>>> f18f9440540c43c841420b6fafd3d6d7325120cc
    next();
})



function b(f){
    f()
}

function hof2(){
    return function(){

    }
}

function hof3(){
    return b;
}


app.get('/api/todos', (req, res) => {
    res.send(data);
})


app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/public/index.html`, (err, html) => {
        if(err) throw err;
        
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    });
})
app.listen( app.get('port'), () => {
    console.log(`Listening at http://localhost:${app.get('port')}`)
})