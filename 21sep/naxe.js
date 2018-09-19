window.onload = function(){
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');
    // getImageData(x,y,width,height)
    // createImageData(width, height)
    // putImageData(imgData, dx, dy, x, y, width, height)

    let img = new Image()
    img.onload = function(){
        ctx.drawImage(img, 100 ,100, 200,200)
        grayScale()
    }
    img.src = 'eh.svg.png'

    function grayScale(){
  let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height)
  let data = pixels.data
  for( let i = 0; i < data.length; i +=4){
    //   console.log(`Red - ${data[i]}, Green - ${data[i+1]}, Blue - ${data[i+2]}`)
   const grey = data[i] * .3 + data[i+1] *.59 + data[i+2] * .11;
    data[i] = grey;
    data[i+1] = grey;
    data[i+2] = grey;
  }
    ctx.putImageData(pixels,0,0)
    }
}