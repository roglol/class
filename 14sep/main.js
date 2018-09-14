let upperCase = require('upper-case');
let OS = require('os')
let dateFormatter = require('./date_formatter')
// console.log(upperCase('my string'));
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// console.log(`Platform - ${OS.platform}`)
// console.log(`Architecture - ${OS.arch}`)
// console.log(`LoadAvg - ${OS.cpus().length}`) 'dadsa'

let current = new Date();

console.log(`Current Date - ${dateFormatter.formatDate(current , ':')}`)
console.log(`Current Time - ${dateFormatter.formatTime(current, ':')}`)
