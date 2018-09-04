let str = `Demo Str 145 
    kfiwif.
    ksbeksbe.
    hello text`;


let sentence = str.split('.').length -1 
let words = str.split(" ")
console.log(words)
let numbers = str.replace(/[^0-9]/g,'').length;
let lines = str.match(/\n/g).length;
let letters = str.match(/[A-z]/g).length;

console.log(`Senetce - ${sentence}, Words - ${words}, Numbers - ${numbers}, Lines - ${lines}, Letters - ${letters}`);



