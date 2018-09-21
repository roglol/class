let ctx, canvas
window.onload = () => {
 canvas = document.getElementById('imageCanvas')
 ctx = canvas.getContext('2d')

// generateImage()

// function generateImage(){
//     let height = canvas.height;
//     let width = canvas.width;

//     let pixels = ctx.createImageData(width, height)
//     let centerX = width / 2;
//     let centerY = height / 2;

//     let currentPixelPos = 0;

//     for(let y = 0; y < pixels.height; y++){
//         for(let x = 0; x<pixels.width; x++){
//             let xOffset = x - centerX;
//             let yOffset = y - centerY;

//             let  d = Math.abs(xOffset) + Math.abs(yOffset);
//             let t = Math.tan(d / 10)

//             let r = t * 255;
//             let g = 125 + t * 80;
//             let b = 255 + t * 20;

//             pixels.data[currentPixelPos++] = Math.max(0,Math.min(255,r))
//             pixels.data[currentPixelPos++] = Math.max(0,Math.min(255,g))
//             pixels.data[currentPixelPos++] = Math.max(0,Math.min(255,b))
//             pixels.data[currentPixelPos++] = Math.random() * 1000
//         }
//     }

//     ctx.putImageData(pixels,0,0)

// }
window.addEventListener('keydown', update)
let  x = 200
let y = 200

     function update(e){
        if (e.keyCode == '38') {
            // up arrow
            y = y -5
        }
        else if (e.keyCode == '40') {
            // down arrow
            y = y +5
        }
        else if (e.keyCode == '37') {
           // left arrow
           x = x -5
        }
        else if (e.keyCode == '39') {
           // right arrow
           x = x + 5
        }
         
     }
   
     function draw(){
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
    }
    
    function animate(){
        ctx.fillStyle = 'white'
        ctx.fillRect(0,0,canvas.width, canvas.height)
        draw()
        requestAnimationFrame(animate)
    }
    animate()
    

}



