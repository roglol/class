let ballX = 75
let ballSpeedX = 5
let ballY = 75
let ballSpeedY = 7

const BRICK_W = 100;
const BRICK_H = 50;
const BRICK_GAP = 2;
const BRICK_COUNT = 8;
const BRICK_ROWS = 3;

let brick0 = true
let brick1 = true
let brick2 = true
let brick3 = true
let brickGrid = new Array(BRICK_COUNT)

const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10;
const PADDLE_DIST_FROM_EDGE = 60;
let paddleX = 400
let canvas, canvasContext
let mouseX = 0;
let mouseY = 0;
function updateMousePos(evt){
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement

     mouseX = evt.clientX - rect.left - root.scrollLeft
     mouseY = evt.clientY - rect.top - root.scrollTop

    paddleX = mouseX - PADDLE_WIDTH / 2;

}
function brickReset(){
    for(let i = 0; i <BRICK_COUNT; i++){
        brickGrid[i] = true
    //     if(Math.random() < 0.5){
    //         brickGrid[i] = true
    // } else{
    //     brickGrid[i] = false;
    // }
}
       
}
window.onload = function() {
    canvas = document.getElementById('gameCanvas')
    canvasContext = canvas.getContext('2d')

    let framePerSecond = 30;
    setInterval(updateAll, 1000/framePerSecond)
    canvas.addEventListener('mousemove', updateMousePos)
    brickReset()
}

function updateAll(){
    moveAll()
    drawAll()
}
  
 function ballReset(){
     ballX = canvas.width / 2;
     ballY = canvas.height / 2
 }
  function moveAll(){
    ballX += ballSpeedX
    ballY += ballSpeedY
    if(ballX < 0){
        ballSpeedX *= -1
    }
    
    if(ballX > canvas.width){
        ballSpeedX *= -1
    }
    
    if(ballY < 0){
        ballSpeedY *= -1
    }
    
    if(ballY > canvas.height){
        ballSpeedY *= -1
    }
    
    let paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EDGE
    let paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THICKNESS
    
    let paddleLeftEdgeX = paddleX
    let paddleRightEdgeX = paddleLeftEdgeX + PADDLE_WIDTH
    if(ballY > paddleTopEdgeY && 
       ballY < paddleBottomEdgeY &&
       ballX > paddleLeftEdgeX &&
       ballX < paddleRightEdgeX){
           ballSpeedY *= -1
           let centerOfPaddleX = paddleX + PADDLE_WIDTH / 2
           let ballDistFromPaddleCenterX = ballX - centerOfPaddleX
           ballSpeedX = ballDistFromPaddleCenterX * 0.35
       }
  } 

  function drawBricks(){
    for(let eachRow = 0; eachRow < BRICK_ROWS; eachRow++){
        for(let i = 0; i<BRICK_COUNT; i++){
        if(brickGrid[i]){
            colorRect(BRICK_W * i,BRICK_H * eachRow,BRICK_W-BRICK_GAP, BRICK_H-BRICK_GAP, 'blue')
          }
      }
    }
     
  }

  function drawAll(){
   colorRect(0,0,canvas.width,canvas.height,'black')
   colorCircle(ballX,ballY,10,'white')
   colorRect(paddleX, canvas.height - PADDLE_DIST_FROM_EDGE, 
    PADDLE_WIDTH,PADDLE_THICKNESS, 'white')
    drawBricks()
    let mouseBrickCol = mouseX / BRICK_W;
    let mouseBrickRow = mouseY / BRICK_H
    colorText(mouseBrickCol+","+mouseBrickRow,mouseX,mouseY,'yellow')
  }

  function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor){
    canvasContext.fillStyle = fillColor
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight)
  }
  function colorCircle(centerX,centerY,radius,fillColor){
    canvasContext.fillStyle = fillColor
    canvasContext.beginPath()
    canvasContext.arc(centerX,centerY,radius,0,Math.PI * 2, true)
    canvasContext.fill()
  }
  function colorText(showWords, textX,textY,fillColor){
      canvasContext.fillStyle = fillColor;
      canvasContext.fillText(showWords, textX, textY)
  }
 
