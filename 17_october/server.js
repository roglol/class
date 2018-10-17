const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const multer = require('multer')
const path = require('path')
const app = express()
const mCache = require('memory-cache')

mCache.put("super_cache", "wow", 300, function(key,value){
    console.log(`Key - ${key}, Value - ${value}`)
})

console.log(`Super Cache - ${mCache.get('super-cache')}`)

setTimeout(()=>{
    console.log(`Super Cache 500- ${mCache.get('super-cache')}`)
},500)

const PORT = 3000;

app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({secret: 'super cat', name:'demo-site', resave:true, saveUninitialized:true}))
app.use(express.urlencoded( { extended: true}))
app.set('views', './public/views')
app.set('view engine', 'pug')

const multerConfig = multer({
    dest: 'public/uploads'
})

const cachePage = (duration) =>{
    return  (req,res,next) =>{

        let key = `__cached__${req.originalUrl || req.url}`
        let pageBody = mCache.get(key);
        if(pageBody){
            res.send(pageBody)
        }
        else{
            res.sendResponse = res.send;
            res.send = (body) =>{
                mCache.put(key,body,duration * 1000);
                res.sendResponse(body)
            }
            next();

        }
    }
}
app.get('/cache', cachePage(4), (req,res)=>{
      setTimeout(() =>{
         const date = new Date()   
         let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
         res.render('cached',{time})
      },3000)
})



app.post('/',  multerConfig.single('image'),(req,res) =>{
    const imgUrl = path.join('uploads', req.file.filename)
    const userName = req.body.username
   res.render('index',{imgUrl,userName})
})

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/public', 'upload.html'))
})

app.listen(PORT, ()=>{
  console.log(`Server on Port -${PORT}`)
})
