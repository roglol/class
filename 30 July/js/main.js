const container = document.querySelector('.container');
const contentBox = document.querySelector('.content__box');
const pElement = document.querySelector('p');

// container.addEventListener('click', function click(event){
//     console.log("Container Div")
// }, false);

// contentBox.addEventListener('click', function click(event){
//     console.log("contentBox Div")
// }, false);

// pElement.addEventListener('click', function click(event){
//     console.log("p tag")
//     // event.stopPropagation();
//     event.stopImmediatePropagation();
// }, false);

// pElement.addEventListener('click', function click(event){
//     console.log("p tag 2")
// }, false);


// Event Creation Example
// const myEvent = document.createEvent('CustomEvent');

// pElement.addEventListener('myCustomEvent', function(event) {
//     console.log(event.detail);
// })
// contentBox.addEventListener('myCustomEvent', function(event){
//     console.log(event.detail);
// })

// const myCustomEventData = {
//     name: 'myCustomEvent',
//     id: 2018,
// }
// myEvent.initCustomEvent('myCustomEvent', true, false, myCustomEventData);

// pElement.dispatchEvent(myEvent);


// Event Delegation Example
// const table = document.querySelector('table');

// table.addEventListener('click', ({target}) => {
//     if( target.tagName.toLowerCase() === 'td'){
//         console.log(target.textContent)
//     }
// });

$(document).ready( function(){
    // DOM Loaded
    // alert("A")

    // $(selectorExpression)

    // const divElements = $('div,p');
    // console.log(divElements);

    // const trElements = $('table tr');
    // console.log(trElements);

    const customersDiv = $('#customersDiv');
    // console.log(customersDiv);

    // const wowClass = $('.wow');
    // console.log(wowClass);

    // const multipleClasses = $('.content__box, .wow')
    // console.log(multipleClasses);

    // const table = $('table[border]');
    // console.log(table)

    // const span = $('span:contains("Site")');
    // console.log(span)

    const oddTr = $('tr:odd');
    // console.log(oddTr);

    const evenTr = $('tr:even');
    // console.log(evenTr);

    evenTr.each( function(index){
        // console.log($(this).html())
        this.title = `Current Index - ${index}`;
    });

    let attrVal = customersDiv.attr('class');
    customersDiv.addClass('newClass--Example')
    console.log(attrVal);
});
