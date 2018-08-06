$(document).ready( function(){
    // $('h1').myPlugin1();
    // $('h1').myPlugin2();
         $('h1')
         .styleElement({
             text: 'Hello Plugin',
             color:'green',
             fontSize: '20px'
         })
         let worker = new Worker('work.js')
         worker.postMessage('Hello my Worker!..')
        //  worker.terminate();
         worker.addEventListener('message' , (event) => {
              console.log(event.data)
            //   worker.terminate();
         })
})