// String.prototype.show = function(){
//     console.log(this)
// }
// 'hello world'.show()

// function User(name){
//     this.name =name;
//     this.sayName = function(){
//         console.log(this.name)
//     }
// }
// let gela = new User('gela')
// console.log(gela.name)


// function Human(name, birthday){
//     this._name = name;
//     this._birthday = birthday;
// }
// Human.prototype._calcAge = function(){
//     return new Date().getFullYear() - this._birthday.getFullYear()
// }
// Human.prototype.sayName = function(){
//     console.log(`Name: ${this._name}, Age - ${this._calcAge()}`)
// }

// let human = new Human('John', new Date(1996, 5, 6));
// human.sayName()

// class Animal {
//     constructor(name){
//         this.name =name;
//     }
//     get name(){
//         return this._name
//     }
//     set name(value){
//         if(value.length === 0){
//             console.log('Name Error!..');
//             return;
//         }
//         this._name = value;
//     }
//     sayName(){
//         console.log(this.name.repeat(3));
//     }

//     static staticMethod(){
//         console.log(this === Animal)
//     }
// }

// let cat = new Animal('Tom');
// cat.sayName()
// function makeAClass(sentence){
//     return class {
//         say(){
//             console.log(sentence);
//         }
//     }
// }

// let sentence = makeAClass('Lorem Ipsum Dolar');
// new sentence().say()

// class Article {
//     constructor(title, date){
//         this.title = title;
//         this.date= date;
//     }
//     static compare(articleA, articleB){
//         return articleA.date = articleB.date;
//     }
// }

// let articles = [
//     new Article('HTML5', new Date(2018, 6, 13)),
//     new Article('CSS3', new Date(2018, 5, 15)),
//     new Article('ES6', new Date(2018, 4, 11)),
// ]
// articles.sort(Article.compare);

// class Product {
//     constructor(name, price){
//         this._id = 10,
//         this.name = name,
//         this.price = price
//     }
//     makeDiscount(discount) {
//         return this.price - this.price*discount/100
//     }
//     print() {
//       return `${this._id} ${this.name} ${this.price}`
//     }
//     static compare(ProductA, ProductB){
//         return ProductA.price - ProductB.price
//     }
//     get id(){
//         return this._id;
//     }
// }

// let products = [
//         new Product( 'car', 1300),
//         new Product('book', 12),
//         new Product('tv', 20),
// ]
// console.log(products.sort(Product.compare))
// products[0].id = 1;
// console.log(products[0].id)
// console.log(products[0].print())
// console.log(products[0].makeDiscount(10))


// class Animal  {
//     constructor(name, speed){
//         this.name = name;
//         this.speed = speed;
//     }
//     run(speed = 0){
//         this.speed += speed;
//         console.log(`${this.name} runs with speed ${this.speed}`);
//     }
//     stop(){
//         this.speed = 0;
//         console.log(`${this.name} stopped.`);
//     }
//     static compare(a,b){
//         return a.speed - b.speed;
//     }
// }

// class Mouse extends Animal {
//     constructor(name, speed){
//         super(name);
//         this.speed = speed ;
//     }
//     hide(){
//         console.log(`${this.name} hides!`)

//     }
//     stop(){
//         super.stop();
//         this.hide()
//     }
// }
// let jerry = new Mouse('Jerry', 3);
// jerry.run(120)
// // jerry.hide();
// jerry.stop()
// // console.log(jerry.earlength)
// let mice = [
//     new Mouse('Big Rat', 5),
//     new Mouse('Batman', 2),
//     new Mouse('Jerry', 4),

// ]
// mice.sort(Animal.compare);
// mice[0].run()
// class MyArray extends Array {
//     isEmpty(){
//         return this.length === 0;
//     }
// }
// let myArr = new MyArray(1,2,3,4,5,6,7,8,9,10,20,30,40)
// console.log(`myArr.isEmpty() - ${myArr.isEmpty()}`);
// let filteredArr = myArr.filter( item => item >= 10);
// console.table(filteredArr)
// console.log( jerry instanceof Animal );
// console.log( jerry instanceof Mouse );
// console.log(myArr instanceof Animal);
// class Product {
//     constructor(name, price){
//         this._id = 10,
//         this.name = name,
//         this.price = price
//     }
//     makeDiscount(discount) {
//         return this.price - this.price*discount/100
//     }
//     print() {
//       return `${this._id} ${this.name} ${this.price}`
//     }
//     static compare(ProductA, ProductB){
//         return ProductA.price - ProductB.price
//     }
//     get id(){
//         return this._id;
//     }
// }

// let products = [
//         new Product( 'car', 1300),
//         new Product('book', 12),
//         new Product('tv', 20),
// ]
// console.log(products.sort(Product.compare))
// products[0].id = 1;
// console.log(products[0].id)
// console.log(products[0].print())
// console.log(products[0].makeDiscount(10))

// class Book extends Product {
//     constructor( name, price, author, pubDate){
//     super(name, price)
//     this.author = author,
//     this.pubDate = pubDate;
//     }
    
//   print(){
//       console.log(super.print());
//       console.log(`${this.author} -${this.pubDate} `)
//   }
// }


// let Books = [
//         new Book('car', 1300, 'dwadw', '1908'),
//         new Book('book', 12, 'wdw', '1087'),
//         new Book('tv', 20, 'wfwaf', '1098'),
// ]
// Books[0].print()
// console.log(Books[1].id

// console.log(wow)
// console.log(window.wow)
// let myWow = document.getElementById('wow')
// myWow.style.padding ='20px';
// myWow.style.backgroundColor = 'red';
// console.log(myWow)

// let divs = document.getElementsByTagName('div');
// // console.log(divs.wow)
// // console.log(divs)
// for( let div of divs){
// //     console.log(div.innerHTML)
// // }
// let menus = document.getElementsByClassName('menu');
// // console.log(menus);
// for(let menu of menus){
//     // console.log(menu);
// }

// let ps =document.getElementsByName('p1');
// for(let key of ps.entries()){
//     // console.log(key)
// }

// // let elements = document.querySelectorAll('ul >li:last-child')
// // elements.forEach( el => {
// //     el.style.backgroundColor = 'red'
// //     el.style.padding = '10px'
// //     el.style.color = '#fff'
// //     el.style.fontWeight = '900'
// //     // console.log(el)
// // })

// let element = document.querySelector('p:last-of-type');
// console.log(element)

// console.log(document.body.constructor.name)
// console.log(document.body instanceof HTMLBodyElement)
// console.log(document.body instanceof HTMLElement)
// console.log(document.body instanceof Element)
// console.log(document.body instanceof Node)
// console.log(document.body instanceof EventTarget)

    // result.textContent = target.value

// let date = new Date
// let h = date.getHours()
// let m =date.getMinutes()
// let s =date.getSeconds()
// var myVar = setInterval(myTimer, x);

// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("result").innerHTML = t;
// }

// function myStopFunction() {
//     clearInterval(myVar);
// }

// document.getElementById('button').addEventListener('click', clearInterval(myTimer) )
// var myVar = setInterval(myClock, 1000);
// function myClock(){
//     var d =new Date()
//     var t = d.toLocaleTimeString()
//     result.innerHTML = t
// }
// button.addEventListener('click', function(){
//     setTimeout(function() { return clearInterval(myVar)}, username.value* 1000)
    
// })
// refresh.addEventListener('click', function(){
//     myVar = setInterval(myClock, 1000);
// })
// username.addEventListener('input', updateText)
// username.addEventListener('input', updateText)
// function updateText({target}){
//     // console.log(target.dataset.change)
//     let toChange = document.querySelector(`#${target.dataset.change}`)
//     toChange.textContent = target.value;
// }
// document.body.info = {
//     name: 
// }

// function change(){
//     for(i = 1; i < 5; i++){
//     if(id.value == `div${i}`){
//         document.getElementById(`div${i}`).style.color = color.value
//         document.getElementById(`div${i}`).style.fontSize = fontsize.value
//         document.getElementById(`div${i}`).style.textAlign = position.value
       
//     }
// }
// }

// document.getElementById('button').addEventListener('click', change)

// let a = 11;

// console.log(a);
// try{
// console.log(b);
// }
// catch(error){
//     console.log(error.message)
// }

// let b = 13;
// console.log(a + b)

// try{
//     console.log('Start of try')
//     undefinedVar;
//     console.log('End of try')
// }
// catch(error){
//   console.log(`error has occured: ${error}`)
// }
// finally{
//     console.log(`Always ready to run`);
// }

// let myPerson = {
//     name: 'JSON Guy', 
//     id: 667,
//     isAdmin: true
// };
// let toSendData = [myPerson, myPerson, myPerson];
// console.log(toSendData);
// let serialized = JSON.stringify(toSendData)
// console.log(serialized)
// let unserialized = JSON.parse(serialized);
// console.log(unserialized)

// let json = `{"name":"JSON Guy","id":667,"isAdmin":true}`;
// try {
//     let data = JSON.parse(json);
//     console.log(data)
// }
// catch(error) {
//         console.log(eror)
// }
// let divElement = document.createElement('div')
// // console.log(divElement);
// document.body.appendChild(divElement);

// divElement.textContent = 'Dynamic text'
// divElement.classList.add('box')
// let liElement = document.createElement('li');
// liElement.innerText = 'Li Element';
// liElement.style.fontSize = '20px'
// // liElement.append(' append string')
// let strongElement = document.createElement('strong');
// strongElement.textContent = ' i am a strong element'
// // liElement.append(strongElement)
// // mylist.insertBefore(liElement, mylist.children[2]);
// mylist.children[1].after(liElement)
// let clonedLiElement = liElement.cloneNode(true);
// mylist.children[1].after(clonedLiElement);
// // mylist.children[1].replaceWith(liElement);

// mylist.children[mylist.children.length -1].remove();
// let removeElement = mylist.children[mylist.children.length];
// mylist.removeChild(removeElement);
// console.log(removeElement.textContent);


// function clear(elem){
//     while(elem.firstChild){
//         elem.firstChild.remove()
//     }
// }

// clear(list)

// let liElement = document.createElement('li');
// liElement.innerText = '2'
// ul.insertBefore(liElement, ul.children[1])

// let liElement1 = document.createElement('li');
// liElement1.innerText = '3'
// ul.insertBefore(liElement1, ul.children[2])

// function createCalendar(elem, year, month){
//      let date = new Date()
// }

// function createClendar(elem, year, month){
//     let date = new Date(year, month, 6)
//     let number = new Date(year, month, 6)
// }

// function hello(){
//    console.log('vaime')
// }

// let  prop_handler = document.getElementById('prop_handler');
// prop_handler.onclick = function(){
//     console.log('Prop handler')
// }

// let listener = document.getElementById('listener');
// listener.addEventListener('click' , function(){
//     console.log('AddEventListener')
// })
// window.addEventListener('click', (event) =>{
//     console.log(1)
// }, true);

// document.addEventListener('click', (event) =>{
//     console.log(2)
// }, true)

// document.documentElement.addEventListener('click', (event) =>{
//     console.log(3)
// }, true);
// document.body.addEventListener('click', (event) =>{
//     console.log(4)
// }, true);
// document.querySelector('#listener').addEventListener('click', (event) =>{
//     console.log(5)
// }, true);
// document.querySelector('#listener').addEventListener('click', function namedCB(event){
//     console.log('NamedCB',event.target);
//  }, false);

// let arrowFunction = document.querySelector('#arrowFunction');
// arrowFunction.addEventListener('click', (event) =>{
//     console.log('ArrowFunction', this)
// document.body.addEventListener('click', (event) =>{
//     console.log(event.currentTarget)
// }, false);
// document.documentElement.addEventListener('click', (event) =>{
//     console.log(event.currentTarget)
// }, false);
// document.addEventListener('click', (event) =>{
//     console.log(event.currentTarget)
// }, false);
// window.addEventListener('click', (event) =>{
//     console.log(event.currentTarget)
// }, false);

// function doAsync() {
//     let p = new Promise( function(resolve, reject){
//         console.log('in promise code');
//         setTimeout( function(){
//             // console.log('resolving')
//             console.log('rejecting')
//             // resolve();
//             reject();
//         }, 2000)
//     });
//     return p;
// }

// // let promise = doAsync()
// doAsync().then(function(){
//    console.log('fulfilled')
// }, function(){
//      console.log('rejected')
// })

// let usersEndPoint = 'https://jsonplaceholder.typicode.com/users';
// fetch(usersEndPoint, {
//     method: 'get'
// })
// .then((response)=>{
//     console.log(response)
//     if( response.status === 200){
//         console.log('vau')
//         return response.json()
//     }
// })

// .then(usersList => {
//     console.log(usersList)
//     document.body.innerHTML = usersList.map( user => {
//         //onclick = 'showDetailsById(${user.id})'
//         return `<div data-user-id = '${user.id}' >
//                 <h2>${user.name}<small> Id - ${user.id}</small></h2>
//         </div>`
//     }).join('');
//     let users = document.querySelectorAll('[data-user-id]');
//     users.forEach( user => {
//         user.addEventListener('click', (event) => {
//             console.log('mevar', event.target)
//             let parentNode = event.target.parentNode;
           
//             let userDiv = event.target
//             if( userDiv.tagName.toLowerCase() != 'div'){
//                 while( userDiv.tagName.toLowerCase() != 'div'){
//                     userDiv = userDiv.parentNode
//                 }
//             }
//             console.log('Parent node - ', userDiv);
//             console.log(userDiv.dataset)
//             let userId = user.dataset.userId;
//             showDetailsById(userId);
        
//         }, false);
//     })
// })
// .catch((error) => {
//     console.log(`Error - ${error.message}`)
// })


// function showDetailsById(userId){
//     fetch(`${usersEndPoint}/${userId}`, {
//         method: 'get'
//     })
//     .then((response)=>{
//         console.log(response)
//         if( response.status === 200){
//             console.log('vau')
//             return response.json()
//         }
//     })
    
//     .then(usersDetail =>{
//          document.body.innerHTML = `
//          <div>
//          <h2>${usersDetail.name}</h2>
//          <h3>Phone - ${usersDetail.phone}</h3>
//          <h3>Website - ${usersDetail.website}</h3>
//          <h3>Email - ${usersDetail.email}</h3>

//          </div>
//          `
//     })
//     .catch((error) => {
//         console.log(`Error - ${error.message}`)
//     })
// }

// function makeAPromise(time){
//     return new Promise(function(resolve, reject){
         
//          setTimeout(() => {
//              if(time > 3000){
//                 //  console.log('Rejecting')
//                  reject(new Error('too long time'))
//              }
//              else{
//                 //  console.log('Resolving');
//                  resolve(`OK ITS ${time}`)
//              }
//          }, time)
//     })
// }

// let sec1 = makeAPromise(1000);
// sec1.then( (result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error.message)
// })
// let sec2 = makeAPromise(2000);
// sec2.then( (result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error.message)
// })

//  let sec3 = makeAPromise(3000);
//  sec3.then( (result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error.message)
// })
// let sec4 = makeAPromise(4000);
// sec4.then( (result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error.message)
// })

// let allPromise = Promise.all([sec1, sec2, sec3]);
// allPromise
// .then((result) =>{
//  console.log(result)
// })
// .catch((error) =>{
//     console.log(error);
// })


// let allRace = Promise.race([sec1, sec2, sec3, sec4]);
// allRace
// .then((result) =>{
//  console.log(result)
// })
// .catch((error) =>{
//     console.log(error);
// })

// let resolvedPromise = Promise.resolve('Resolved Promise Example');
// resolvedPromise
// .then(result => {
//      console.log(result)
// })
// .catch( error => {
//     console.log(error)
// })
// (event) =>{
    
//     document.getElementById('div1').textContent = day.value
//     document.getElementById('div2').textContent = year.value
//     document.getElementById('div3').textContent = month.value
//     document.getElementById('div4').textContent = city.value
//     document.getElementById('div5').textContent = textarea.value
//     let a =document.createElement('img')
//     a.src = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/23/12/cristiano-ronaldo-1.jpg'
//     let b = document.getElementById('div7')
//     b.appendChild(a)
// }





// function doAsync() {
//         let p = new Promise( function(resolve, reject){
//             setTimeout( function(){
//                 // document.getElementById('div1').textContent = day.value
//                 //     document.getElementById('div2').textContent = year.value
//                 //     document.getElementById('div3').textContent = month.value
//                 //     document.getElementById('div4').textContent = city.value
//                 //     document.getElementById('div5').textContent = textarea.value
//                 //     let a =document.createElement('img')
//                 //     a.src = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/23/12/cristiano-ronaldo-1.jpg'
//                 //     let b = document.getElementById('div7')
//                 //     b.appendChild(a)
//             }, 2000)
//         });
//         return p;
//     }
    

document.getElementById('button').addEventListener('click', doAsync 
)
    
    function doAsync() {
        let div = document.createElement('div')
        div.textContent = 'Loading...'
        body.appendChild(div)
            let p = new Promise( function(resolve, reject){
                setTimeout( function vaime(){
                    body.removeChild(div)
                    resolve();
                  
                }, 2000)
            });
            p.then( () =>{
                document.getElementById('div1').textContent = day.value
                document.getElementById('div2').textContent = year.value
                document.getElementById('div3').textContent = month.value
                document.getElementById('div4').textContent = city.value
                document.getElementById('div5').textContent = textarea.value
                let a =document.createElement('img')
                a.src = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/23/12/cristiano-ronaldo-1.jpg'
                let b = document.getElementById('div7')
                b.appendChild(a)
            })
            .catch( (error) =>{
                console.log(error.message)
            })
           
        }
      
        
       