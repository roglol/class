const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const app = express()
const PORT = 3000
const MyPages = {
    main:{
        url:'/',
        count:0
    },
    contact:{
        url:'/contact',
        count:0
    }
}

app.use(cookieParser())
app.use(session({ secret: 'super cat',
                   name: "demo-site",
                   resave: true,
                   saveUninitialized: false}))
// app.use(express.urlencoded({extended: true}))

app.get(MyPages.main.url, (req,res) =>{
    if(req.session.main){
        req.session.main.count++;
        res.send(`you visited this page ${req.session.main.count} times`)

    }else{
        req.session.main  = MyPages.main
        res.send('Welcome to demo site')
    }
    
})
app.get(MyPages.contact.url, (req,res) =>{
    if(req.session.contact){
        req.session.contact.count++;
        res.send(`you visited this page ${req.session.contact.count} times`)

    }else{
        req.session.contact = MyPages.contact
        res.send('Welcome to demo site')
    }
    
})

app.get('/destroy', (req,res) =>{
    req.session.destroy( () =>{
        res.send('Session delete')
    })
})


app.listen(PORT, ()=>{
    console.log('chaitvirta')
})