let ctx, canvas
window.onload = () => {
 canvas = document.getElementById('imageCanvas')
 ctx = canvas.getContext('2d')

 let borderColor = '#c8c8c8'

 let centerX = canvas.width / 2
 let centerY = canvas.height / 2


//  ctx.beginPath()
//  let gradient = ctx.createLinearGradient(centerX,20,centerX, 200);
//  gradient.addColorStop(0, '#fff')
//  gradient.addColorStop(1, '#ddd')

//  ctx.fillStyle = gradient;

//  ctx.rect(20,20, canvas.width - 40, canvas.height - 40)
//  ctx.fill()
//  ctx.strokeStyle = borderColor;
//  ctx.stroke()
//  ctx.closePath()


ctx.beginPath()

let gradient = ctx.createLinearGradient(centerX, centerY / 1.2, 80, 100, 50, 40)
gradient.addColorStop(0, '#000')
gradient.addColorStop(1, 'red')

ctx.fillStyle = gradient;
ctx.arc(centerX, centerY / 1.2, 80, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()



}