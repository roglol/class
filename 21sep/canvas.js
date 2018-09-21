let canvas;
let canvasContext;
let ballX = 50;
let ballSpeedX = 10;
let ballY = 50;
let ballSpeedY = 4;

let player1Score = 0;
let player2Score = 0
const WINNING_SCORE = 3

let showingWinScreen = false;

let paddle1Y = 250;
const PADDLE_HEIGHT = 100;
let paddle2Y = 250

function calculateMousePos(evt){
    let rect = canvas.getBoundingClientRect()
    let root = document.documentElement
    let mouseX = evt.clientX - rect.left - root.scrollLeft
    let mouseY = evt.clientY - rect.top - root.scrollTop
    return {
        x:mouseX,
        y:mouseY
    }
}
function handleMouseClick (evt) {
     if(showingWinScreen) {
         player1Score = 0
         player2Score = 0
         showingWinScreen = false;
     }
}

window.onload = function(){
    canvas = document.getElementById('gameCanvas')
    canvasContext = canvas.getContext('2d')
    canvasContext.fillStyle = 'black'
    canvasContext.fillRect(0,0,canvas.width,canvas.height)
    let framesPerSecond = 30
    setInterval(function(){
        moveEverything();
        drawEverything()

    }
        , 1000 / framesPerSecond)
        canvas.addEventListener('mousedown', handleMouseClick)
        canvas.addEventListener('mousemove', function(evt){
                let mousePos = calculateMousePos(evt)
                paddle1Y = mousePos.y -(PADDLE_HEIGHT / 2)
        })
}
function ballReset(){
    if(player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE){
           showingWinScreen = true;
       }
    ballSpeedX = -ballSpeedX
    ballX = canvas.width / 2
    ballY = canvas.height / 2
}
function computerMovement(){
    let paddle2YCenter = paddle2Y +(PADDLE_HEIGHT / 2)
    if(paddle2YCenter < ballY-35){
        paddle2Y += 6
    }else if(paddle2YCenter > ballY+35){
        paddle2Y -= 6
    }
}
function moveEverything(){
    if(showingWinScreen){
        return 
    }
    computerMovement()
    ballX = ballX + ballSpeedX
    if(ballX < 0){
        if( ballY > paddle1Y && ballY < paddle1Y+PADDLE_HEIGHT){
                 ballSpeedX = -ballSpeedX
                 let deltaY = ballY - (paddle1Y+PADDLE_HEIGHT/2);
                           ballSpeedY = deltaY * 0.35
        }else{
            player2Score += 1
            ballReset()
           
        }
    }
    if(ballX > canvas.width){
        if( ballY > paddle2Y && ballY < paddle2Y+PADDLE_HEIGHT){
            ballSpeedX = -ballSpeedX
            let deltaY = ballY - (paddle2Y+PADDLE_HEIGHT/2);
                           ballSpeedY = deltaY * 0.35  
   }else{
    player1Score += 1
       ballReset()
       
   }
    }
    ballY = ballY + ballSpeedY
    if(ballY < 0){
        ballSpeedY = -ballSpeedY
    }
    if(ballY > canvas.height){
        ballSpeedY = -ballSpeedY
    }
}
function drawNet() {
    for(let i = 0; i<canvas.height; i+=40){
        colorRect(canvas.width/2 - 1,i,2,20, 'white')

    }
}

function drawEverything(){
    // next line blanks out the screen with black
    colorRect(0,0,canvas.width,canvas.height, 'blue')

    if(showingWinScreen){
        canvasContext.fillStyle = 'white'
        if(player1Score >= WINNING_SCORE){
            canvasContext.fillText("left player won",350,200)
        }
        else if(player2Score >= WINNING_SCORE){
            canvasContext.fillText("right player won",350,200)
        }
        
        canvasContext.fillText("click to continue",350,500)
        return
    }
    drawNet()
    // this is left player paddle
    colorRect(0,paddle1Y,10,PADDLE_HEIGHT,'white')
     // this is right player paddle
     colorRect(canvas.width - 10,paddle2Y,10,PADDLE_HEIGHT,'white')
    // next line draws the ball
    colorCircle(ballX,ballY,10,'white')

    canvasContext.fillText(player1Score,100,100)
    canvasContext.fillText(player2Score,canvas.width-100,100)
   
   
}
function colorCircle(centerX,centerY,radius,drawColor){
        canvasContext.fillStyle = drawColor
        canvasContext.beginPath()
        canvasContext.arc(centerX,centerY,radius,0,Math.PI * 2, true)
        canvasContext.fill()
    
}

function colorRect(leftX,topY,width,height,drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY,width,height)
}