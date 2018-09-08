// function add(n){
//     let s = 0;
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             s += i*j
//         }
//     }
// }

// function recursiveCount(max, current){
//     if( current > max){
//         return
//     }
// console.log(current);
// recursiveCount(max, current + 1)

// }


// recursiveCount(10,1)

// function fibonacci(n){
//     if( n<= 2 ){
//          return 1
//     }else{
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
// }

// for( let i = 1; i<12; i++){
//     console.log(` i - ${i}, num - ${fibonacci(i)}`)
// }

// function factorial(n){
//     if( n <= 1){
//         return 1
//     }else{
//          return  n * factorial(n-1)
//     }
// }
// console.log(factorial(3))

// function addNumbers(number){
//     if (number === 0) return number; 
//     else{
//         return number + addNumbers( number - 1)
//     }
// }

// addNumbers(3)
// 3 + addNumbers(2)
// 3 + 2 + addNumbers(1)
// 3 + 2 + 1

// function tailAddNumbers( number, sum = 0){
//     if (number === 0) return sum; 
//     else{
//         return tailAddNumbers(number - 1, sum + number)
//     }
// }
// console.log(tailAddNumbers(3))
// tailAddNumbers(3, 0)
// tailAddNumbers(2, 3)
// tailAddNumbers(1, 5)
// tailAddNumbers(0, 6)

// function BubbleSort(arr){
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i+ 1; j< arr.length; j++){
//             if(arr[j] < arr[i]){
//              let gela = arr[i]
//              arr[i] = arr[j]
//              arr[j] = gela;
//             }
//         }
//     }
//     return arr
// }

// console.log(BubbleSort([4,2,15,1,3]))

// function BubbleSort(numbers){
//     do{
//       var isSorting = false;
//       for(let i = 0; i < numbers.length; i++){
//           if(numbers[i] > numbers[i+1] ){
//             //  let t = numbers[i]
//             //  numbers[i] = numbers[i+1]
//             //  numbers[i+1] = t
//              [numbers[i], numbers[i+1]] = [numbers[i+1], numbers[i]]
//              isSorting = true
//           }
//       }
//     }
//     while(isSorting)
// }
// let arr=[-7,-3,5,8,10,14,1,3]
// BubbleSort(arr)
// console.log(arr)

// function InsertionSort(arr){
//   for(let i =0; i< arr.length; i++){
//       for(let j = 0; j < i; j++){
//           if( arr[i] < arr[j]){
//                let temp = arr.splice(i,1);
//                arr.splice(j, 0, temp[0]);

//           }
//       }
//   }
//   return arr
// }
// console.log(InsertionSort([-7,-3,5,8,10,14,1,3]))

// function mergeSort(numbers){
//    if( numbers.length < 2){
//        return numbers
//    }
//    let length = numbers.length;
//    let middle = Math.floor(length/2);
//    let left = numbers.slice(0, middle);
//    let right = numbers.slice(middle);
//    return merge(mergeSort(left), mergeSort(right))
// }


// function merge(left, right){
//      const sortedArray = []
//      while(left.length && right.length){
//          if(left[0] <= right[0]){
//          sortedArray.push(left.shift())
//          }else{
//             sortedArray.push(right.shift())
//          }
//      }
//      return sortedArray.concat(left, right)
// }

// let masivi  = [ 3, 5, 2,1, 4, -3, 0];

// console.log(mergeSort(masivi))

// function quickSort(numbers){
//     if( numbers.length <=1) return numbers;

//     const pivot = numbers[numbers.length-1];
//     const left = [];
//     const right = [];

//     for(let i = 0; i < numbers.length-1; i++){
//     if(numbers[i] < pivot){
//         left.push(numbers[i])
//     }else{
//         right.push(numbers[i])
//     }
// }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort([ 3, 5, 2,1, 4, -3, 0]))

