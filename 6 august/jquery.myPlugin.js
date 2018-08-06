//BAD
// $.fn.myPlugin = function(){
//     console.log('MyPlugin')
// }

// ( function($){
//     $.fn.myPlugin = function(){
//         console.log('MyPlugin 2nd way')
//     }
  
// })(jQuery)


// (function($){
//     $.extend($.fn, {
//         myPlugin1(){
//         console.log('MyPlugin 2nd way')
//                 },
//     myPlugin2() {
//         console.log('hello plugin2')
//     }

//     })
// })(jQuery)

( function($){
    $.fn.styleElement = function(options){
     
         let config = $.extend( {
             text: 'styleElement Default Text',
             color: 'red',
             fontStyle: null,
             fontSize:  '16px',
             backgroundColor: 'pink',
             padding: '10px'
        }, options)
        
         return this.each( function(){
            $(this).text(config.text ) ;
            if( config.color){
                $(this).css('color', config.color);

            }
            if( config.fontStyle){
                $(this).css('font-style', config.fontStyle);
                
            }
            if( config.color){
                $(this).css('font-size', config.fontSize);
                
            }
            if( config.backgroundColor){
                $(this).css('background-color', config.backgroundColor);
                
            }
            if(config.padding){
                $(this).css('padding', config.padding)
            }
            
            
        });
    }
  
})(jQuery)



