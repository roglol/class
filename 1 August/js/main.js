$(document).ready( function() {
    $('div').each( function(index, element) {
        let n = $(this);
        // console.log( n.text() )

        // console.log($(this).attr('class'));

        // console.log($(this).css('background-color'))
        // DRY 
        // $('div')

    });

    // $('img').attr( {
    //     title: "Front End Developer",
    //     style: 'border: 2px dotted black;'
    // });

    // $('img').each( function(index, element) {
    //     console.log($(this).attr('style'));
    // });
    
    // append()/appedTo()
    // prepend()/prependTo()
    // remove()
    // wrap()

    // $('.class-5').append(`<span> class-5 Content</span>`)
    // $('div').append(` <strong>Multiple Append</strong>`)
    // $(`<span> class-1 Content</span>`).appendTo('.class-1');

    // $('.class-3').prepend(`<strong>Prepend Example</strong> `);
    // $(`<strong>PrependTo Example </strong>`).prependTo('div');


    // $('#header').wrap(`<header class="header__block" />`)

    // $('.class-2,.class-4').remove();

    // $('div').css('color', 'white');
    // $('div').css({
    //     'color' : 'white',
    //     'font-weight': 'bold',
    //     'font-size' : '20px',
    // } );

    // addClass()
    // hasClass()
    // removeClass()
    // toggleClass()

    // $('div, h1').addClass('newClass');

    // let headerh1 = $('h1');
    // if( headerh1.hasClass('newClass') ) {
    //     console.log("h1 has a newClass");
    //     headerh1.removeClass('newClass');
    // }

    // Jquery Event Shortcuts
    /*
        click()
        blur()
        focus()
        mousemove()
        keydown()

        http://api.jquery.com/category/events/
    */

    // $('#header').click( function(event) {
    //     console.log(event)
    //     $('#small__header').click();
    // });

    // $('#small__header').click( function(event) {
    //     console.log('small__header was clicked')
    // })

    // $('div').on('click mouseenter mouseleave', function(event){
    //     console.log('header event')
    //     $(this).toggleClass('entered')
    //     // $('#header').off('click');
    // })

    // $('div').on( {
    //     mouseenter: function(){
    //         $(this).addClass('entered');
    //     },
    //     mouseleave: function(){
    //         $(this).removeClass('entered');
    //     }
    // } )
    
    // $('div').hover( 
    //     function(){
    //         $(this).addClass('entered');
    //     },
    //     function(){
    //         $(this).removeClass('entered');
    //     }
    // );

    // localStorage
    // sessionStorage

    // let storage = window.localStorage;
    let storage = window.sessionStorage;

    $('#saveBtn').click( function() {
        let name = $('#name').val();
        let old = storage.getItem('userName');

        storage.setItem('userName', `${old} ${name}`);
        // storage.length
        // console.log(storage.key(0))
        // console.log(storage.getItem('userName'))
        console.log(storage.remainingSpace)
    });
});