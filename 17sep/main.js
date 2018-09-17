let canvas, context
window.onload = function(){
     canvas = document.getElementById('myCanvas')
     context = canvas.getContext('2d')
    
    let img = new Image()
    img.onload = function(){
        drawImage(img)
    }
    img.src = 'download.png'

}

function drawImage(img){
    console.log(img)
    let destX = 10;
    let destY = 20;

    let destWidth = 212;
    let destHeight = 212;

    context.drawImage(img, destX, destY, destWidth, destHeight)

}

function showCanvasAsImage(){
  let dataUrl = canvas.toDataURL();
  console.log(dataUrl)
 window.open(dataUrl, 'canvas as image', 'width-300, height-300')
  
}