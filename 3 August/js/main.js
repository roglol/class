$(document).ready( function(){
 $('#loadBtn').click(function(){
    //  $('#myDiv').load('template.html #small');
    //  $('#myDiv').load('template.html', function(response, status, xhr){
    //         //    console.log(xhr);
    //         // if(status === 'error'){
    //         //     alert(xhr.statusText);
    //         // }
    //         let request
    //      if(window.XMLHttpRequest) {
    //           request = new XMLHttpRequest()
    //      }   else if(window.ActiveXobject){

    //      }
       
    //     request.addEventListener('progress', progressFunc);
    //     request.addEventListener('load', completed);
    //     request.addEventListener('error', errorFunc);
    //     request.addEventListener('about', cancelFunction)
        
    //     request.onreadystatechange = function(){
    //         if(request.readyState == XMLHttpRequest.DONE){
    //             console.log(xhr.responseText)
    //         }
    //         else {
    //             console.log('Request -', request.readyState)
    //         }
    //     }
    //     function progressFunc() {
    //         console.log('Progress Function')
    //     }
    //     function errorFunc(){
    //         console.log('Error Function')
    //     }
    //     function cancelFunction(){
    //         console.log('Cancel Function')
    //     }
    //     function completed() {
    //         console.log('Completed Function')
    //     }

        
    //     request.open('GET','template.html', true )
    //     request.send(null)
    //  })

    let url = 'https://jsonplaceholder.typicode.com/users';
    // $.get(url, function(data){
    //     console.log(data)
    //     $('#myDiv').append( data.map((el) => {
    //         return `<h1>${el.name}</h1>`
    //     })
    // )
    // })

    $.ajax({
        url: url,
        data: null,
        method: 'get',
        dataType: 'json',
        success(data, status, xhr) {
             console.log(data)
             
                 $('#myDiv').append( data.map((el) => {
                     return `<h1>${el.name}</h1>`
                 })
             )

        },
        error(xhr, status, error) {
            console.log(error)
        }

    });
 });
});

