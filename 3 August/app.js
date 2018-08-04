let mainModule = (function (){
      let people = ['Person 1', 'Person 2'];

      // DOM caching
      let $element = $('#peopleModule');
      let $button = $element.find('button');
      let $input = $element.find('input');
      let $ul = $element.find('ul')
      const STORAGE_KEY = 'Persons'
     
      $button.on('click', addPerson);
      $ul.delegate('i.del','click', removePerson)

     _updateDOM()
    _updateStorage()
     

      function template(items){
         return items.map( item => {
             return  `<li><span>${item}</span><i class="del">X</i></li>`
         }).join('')
      }

      function  _updateDOM(){
        $ul.html(template(people))
    }
    
    
    function _updateStorage(Adding = false){
        if(window.localStorage){
           if(window.localStorage.getItem(STORAGE_KEY)){
               if(Adding){
                   window.localStorage.setItem(STORAGE_KEY, JSON.stringify(people));

               }
               else{
                   people = JSON.parse(localStorage.getItem(STORAGE_KEY));
               }
           }
           else {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(people))
           }
        }
    }
      function addPerson(newVal){
           let name =(typeof newVal === 'string') ? newVal : $input.val()
           people.push(name)
           addlocalstorage();
           _updateStorage(true)
           _updateDOM();
           $input.val('')

      }
      function removePerson(event){
          let index;
          
          if( typeof event === 'number'){
              index = event - 1 ;
          }
          else {
              let $remove = $(event.target).closest('li');
              index = $ul.find('li').index($remove);
          }
          if(event != 0)
          people.splice(index, 1);
          
          addlocalstorage()
          _updateStorage(true)
          _updateDOM();
      }
      function addlocalstorage() {
        let storage = window.localStorage;
        storage.setItem('name', people);
        
    }
    
 

      return {
          addPerson,
          removePerson,

      }
})() //IIFE




 