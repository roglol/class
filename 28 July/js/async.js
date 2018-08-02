fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => {
    // console.log(json)
  })
  .catch(err => console.log(err));

async function getJson(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let json = await response.json();
        // console.log(json);
        return json;
    }
    catch(err){
        console.log(err);
    }
}

async function getJson2(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        // console.log(json);
        return json;
    }
    catch(err){
        console.log(err);
    }
}
// getJson();

/* Async Function Syntaxes */

// Anonymous async function

let func = (async function(){
    // code
})()

// Async function declaration
async function myAsync(){
    // code
}

// Async function Assignment
let myAsyncFunc = async function(){
    // code
}

let myAsyncFuncArrow = async () => {
    // code
}

// element.addEventListener('click', async function(event) {})

// Object & Class Methods
let myObject = {
    async method(){
        // code
    }
}

class MyClass {
    async method(){
        // code
    }
}

async function funcPromiseAll(){
    let [first, second] = await Promise.all([getJson(), getJson2()]);
    console.log(first)
    console.log(second)
}
funcPromiseAll();
