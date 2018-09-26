let timer
const STORAGE_KEY = 'settings'
let storage = window.localStorage
let canvas, ctx
let level = document.querySelector('select')
let speed = document.querySelector('.speed')
let length = document.querySelector('.length')
let width = document.querySelector('.width')
let box = document.querySelector('.height')
let apples = document.querySelector('.apples')
let button = document.querySelector('button')
let startGame = document.querySelector('.burgerSvg')
let nav =document.querySelector('nav')
let direction = 99
let x = 200
const height = 20
let canvasWidth 
let canvasHeight 
let snakeLength = 10
let foodLength = 1
let snakeSpeed = 10
let eaten = true;
let vsio = false;
const foodImage = new Image()
foodImage.src = 'food.png'
class Menu {
    constructor(){
       this.level = 'Intermediate'
       this.snakeSpeed = 10
       this.snakeLength = 10
       this.boardWidth = 600
       this.boardHeight = 400
       this.appleCount = 1
    }
}
class Apple{
    constructor(topLeftX, topLeftY){
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
    }
    created(){
        ctx.drawImage(foodImage,this.topLeftX,this.topLeftY,height,height)
        }
}
class Food{
    constructor(){
       this.arr = []
    }
    create(){
        for(let i = 0; i < this.arr.length; i++){
             this.arr[i].created()
        }
     }
     init(){
        for(let i = 0; i < foodLength; i++){
            let a = Math.floor(Math.random() * (canvasWidth /height)) * height
            let b = Math.floor(Math.random() * (canvasHeight /height)) * height
            let applei = new Apple(a,b)
            this.arr.push(applei)
     }
    }

    delete(){
        this.arr.length = 0;
    }
   
}


class Snake {
    constructor(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
      this.topLeftX = topLeftX;
      this.topLeftY = topLeftY;
      this.boxWidth = boxWidth;
      this.boxHeight = boxHeight;
      this.fillColor = fillColor
    }
    created(){
    ctx.fillStyle = this.fillColor
    ctx.fillRect(this.topLeftX, this.topLeftY, this.boxWidth, this.boxHeight)
    }
  }
class Snaka {
    constructor(){
       this.arr = []
       this.length = snakeLength
       this.score = 0
    }
    create(){
       for(let i = 0; i < this.arr.length; i++){
            this.arr[i].created()
       }
    }
    init(){
        for(let i = 0; i <this.length; i++){
            let snakei = new Snake(x,x-height * i,height, height,'#006400')
            this.arr.push(snakei)
       }
    }
    delete(){
        this.arr.length = 0
    }
}


let food = new Food()
let snaka = new Snaka()
snaka.init()
let menu
if(storage.getItem(STORAGE_KEY) !== null){
    getStorage()
}else{
    menu = new Menu()
}
startGame.addEventListener('click', ()=>{
      nav.style.display = 'flex'
      nav.style.flexDirection = 'row'
      button.style.display = 'inline-block'
      
})

               window.onload = function() {
				canvas = document.getElementById('myCanvas');
				canvasWidth = canvas.width
                canvasHeight = canvas.height
                ctx = canvas.getContext('2d');
                window.addEventListener('keydown', move)
               timer = setInterval(animate,2000/10);
            };
 
function animate() {
    gameOver();
     update();
     draw();
     if(vsio){
        clearInterval(timer)
    }
} 
function update(){
    if(vsio){
        return;
    }
    for(let i = snaka.arr.length-1; i>=0; i--){
          if(direction ==0){
              if(i==0){
                  snaka.arr[i].topLeftX = snaka.arr[i].topLeftX - height
              }
              else{
        snaka.arr[i].topLeftX = snaka.arr[i-1].topLeftX
        snaka.arr[i].topLeftY = snaka.arr[i-1].topLeftY
              }
          }
          else if(direction ==1){
            if(i==0){
                snaka.arr[i].topLeftY = snaka.arr[i].topLeftY - height
            }
            else{
      snaka.arr[i].topLeftX = snaka.arr[i-1].topLeftX
      snaka.arr[i].topLeftY = snaka.arr[i-1].topLeftY
            }
          }
          else if(direction==2){
            if(i==0){
                snaka.arr[i].topLeftX = snaka.arr[i].topLeftX + height
            }
            else{
      snaka.arr[i].topLeftX = snaka.arr[i-1].topLeftX
      snaka.arr[i].topLeftY = snaka.arr[i-1].topLeftY
            }
          }
          else if(direction==3){
            if(i==0){
                snaka.arr[i].topLeftY = snaka.arr[i].topLeftY  + height
            }
            else{
      snaka.arr[i].topLeftX = snaka.arr[i-1].topLeftX
      snaka.arr[i].topLeftY = snaka.arr[i-1].topLeftY
            }
          }

    }
}
function draw() {
    // clear canvas
    ctx.fillStyle = '#9bba5a'
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    //end the fucking game
    if(vsio){
        ctx.fillStyle = 'white'
        ctx.font="20px Georgia";
        ctx.fillText("click to continue",canvasWidth/3,canvasHeight/3)
        ctx.fillText(`Your Score:${snaka.score}`,canvasWidth/3, canvasHeight/3 + 50)
         return
    }
    //draw snake
    snaka.create()
    //draw food
    while(eaten){
        food.init()
        eaten = false
    }
    food.create()
    //in the case of the collision
    // if(eaten){ 
    for(let i = 0; i <foodLength; i++){
        if(testCollision(snaka.arr[0], food.arr[i])){
            food.arr = []
            eaten = true;
            let new_X, new_Y
            if(direction ==0){
                new_X = snaka.arr[0].topLeftX - height
                new_Y = snaka.arr[0].topLeftY 
            }
           else if(direction ==1){
                new_X = snaka.arr[0].topLeftX 
                new_Y = snaka.arr[0].topLeftY  - height
            }
            else if(direction ==2){
                new_X = snaka.arr[0].topLeftX + height
                new_Y = snaka.arr[0].topLeftY 
            }
           else  if(direction ==3){
                new_X = snaka.arr[0].topLeftX 
                new_Y = snaka.arr[0].topLeftY + height
            }
            snaka.arr.unshift(new Snake(new_X, new_Y,height, height,'#006400'))
            snaka.length++
            snaka.score += 10
            menu.snakeLength++
            updateStorage()
    }
    }
    // }
}

function testCollision(rect1, rect2){
    return((rect1.topLeftX <=rect2.topLeftX) &&
          (rect2.topLeftX <=rect1.topLeftX) &&
          (rect1.topLeftY <=rect2.topLeftY) &&
          (rect2.topLeftY <=rect1.topLeftY))
}


function move(evt){
    let key = evt.keyCode
    if(key ==37 && direction != 2){
              direction = 0
      }else if(key == 38 && direction != 3){
                 direction = 1
      }else if(key ==39 && direction != 0){
               direction = 2
      }else if(key == 40 && direction != 1){
               direction =3
        }
}



function gameOver(){
    for(let i = 0; i < snaka.arr.length; i++){
        if( i == 0){
            continue;
        }
        if((Math.abs(snaka.arr[0].topLeftX - snaka.arr[i].topLeftX)< height) &&
           (Math.abs(snaka.arr[0].topLeftY - snaka.arr[i].topLeftY)< height) ){
            vsio = true
        }
    }
    if(snaka.arr[0].topLeftX > canvasWidth ){
        vsio = true
   }
   if(snaka.arr[0].topLeftX < 0 ){
     vsio = true
  }
   if(snaka.arr[0].topLeftY > canvasHeight){
    vsio = true
  }
 if(snaka.arr[0].topLeftY < 0){
    vsio = true
  }
}


function handleMouseClick () {
    nav.style.display= 'none'
    button.style.display = 'none'
    vsio = true
    eaten = true
     if(vsio) {
        canvas.width = menu.boardWidth
        canvasWidth = canvas.width
        canvas.height = menu.boardHeight
        canvasHeight = canvas.height
        snaka.length = menu.snakeLength
        snakeSpeed = menu.snakeSpeed
        foodLength = menu.appleCount
        food.delete()
        snaka.delete()
        snaka.init()
        snaka.create()
        snaka.score = 0
        direction = 3;
        // var timeleft = 3;
        // var downloadTimer = setInterval(function(){
        // timeleft--;
        // ctx.fillStyle = 'white'
        // ctx.fillText(`Your Score:${timeleft}`,200, 200)
        // document.getElementById("countdowntimer").textContent = timeleft;
        // if(timeleft <= 0)
        //     clearInterval(downloadTimer);
        //     vsio = false
        //     timer = setInterval(animate, 1000/snakeSpeed)
        // },1000);
        // setTimeout(() => {
        //     vsio = false
        // }, 2000);
        vsio = false
        timer = setInterval(animate, 2000/snakeSpeed)
    }
}

length.addEventListener('input', ()=>{
    menu.snakeLength = length.value
    updateStorage()
})
speed.addEventListener('input', ()=>{
    menu.snakeSpeed =  parseInt(speed.value)
    updateStorage()
})
width.addEventListener('input', ()=>{
    menu.boardWidth = width.value
    updateStorage()
})
box.addEventListener('input', ()=>{
    menu.boardHeight = box.value
    updateStorage()
})
apples.addEventListener('input', ()=>{
    menu.appleCount = parseInt(apples.value)
    foodLength = menu.appleCount
    updateStorage()
})
level.addEventListener('change', ()=>{
    if(level.value == 'Novice'){
        menu.snakeSpeed = 10
    }
    if(level.value == 'Intermediate'){
        menu.snakeSpeed = 20
    }
    if(level.value == 'Hard'){
        menu.snakeSpeed = 30
    }
    updateStorage()
})

button.addEventListener('click', handleMouseClick)


function updateStorage(){   
    storage.setItem(STORAGE_KEY, JSON.stringify(menu));  
}



function getStorage(){
    menu = JSON.parse(storage.getItem(STORAGE_KEY));
}




















