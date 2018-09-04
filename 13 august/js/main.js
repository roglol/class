let regEx = new RegExp('abcd'); // new RegExp(pattern, flags)
let regEx2 = /abcd/; // /pattern/flags

// test(), exec()

let sourceStr = 'Hello RegExp Hello';
let helloRegEx = new RegExp('hello', 'gi');
// [abc]
// ^
let chSet = /[^ts]ell/i
// let result = helloRegEx.test(sourceStr);
// let result2 = helloRegEx.exec(sourceStr);
// console.log(result);
// console.log(result2);
// let str = 'Sell';

// console.log(chSet.test(str));

// range
// {min, max}
// console.log(/[a-c]{2,}/i.test('77CC'));

// [0-9] \d
// [a-zA-Z0-9_] \w
// \D [^0-9] ^0 ^1 ^2 ...
// \W [^a-zA-Z0-9_]

// \s space, tab, newLine verticalLine ...
// . all except newLine(\n)

// \S non whitespace 


// +, *, ?
// + 1 or more times
// * 0 or more times
// ? 0 or 1 time 
console.log(/\d+/.test('7755488484ewf'));
// console.log(/d*g/.test('dg'));

// console.log(/doo?g/.test('doog'));

let alt = /red|green car/;

// console.log(alt.test('red car'));
// console.log(alt.test('green car'));
// console.log(alt.test('yellow car'));


// ნებისმიერი 10-ნიშნა რიცხვი
// 13-08-2018    13-08-18
// DD-MM-YYYY || DD-MM-YY
let dateRegEx = /^(\d{1,2}-){2}\d{2}(\d{2})?$/

// console.log(dateRegEx.test('13-08-2018'));
// console.log(dateRegEx.test('13-08-18'));
// console.log(dateRegEx.test('13-8-18'));



