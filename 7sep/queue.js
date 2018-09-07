// class Queue {
//     constructor(){
//         this.tasks = [];
//     }


//     enqueue(task){
//         this.tasks.push(task);
//     }
    
//     dequeue() {
//         return this.tasks.shift();
//     }

//     firstElement(){
//         return this.tasks[0];
//     }

//     log(){
//         console.log(this.tasks)
//     }
// }

// let myQueue = new Queue;
// myQueue.enqueue('1');
// myQueue.enqueue('3');
// myQueue.enqueue('5');
// myQueue.enqueue('7');
// myQueue.enqueue('9');
// myQueue.log()
// console.log( myQueue.firstElement())
// myQueue.dequeue()
// myQueue.log()
// console.log( myQueue.firstElement())

// class PQueue {
//     constructor(){
//         this.tasks = [];
//     }


//     enqueue(task){
//         if( this.isEmpty()){
//         this.tasks.push(task);
//         }else{
//             let inserted = false;
//             for( let i=0; i < this.tasks.length; i++){
//                 if( task[1] < this.tasks[i][1]){
//                    this.tasks.splice(i, 0, task);
//                    inserted = true;
//                    break;  

//                 }
//             }
//             if(!inserted){
//                 this.tasks.push(task);
//             }
//         }
//     }
    
//     dequeue() {
//         return this.tasks.shift();
//     }

//     firstElement(){
//         return this.tasks[0];
//     }

//     log(){
//         console.log(this.tasks)
//     }
//     isEmpty(){
//         return this.tasks.length === 0;
//     }
// }

// let pQueue = new PQueue();

// pQueue.enqueue( ['Task1', 1])
// pQueue.enqueue( ['Task2', 2])
// pQueue.enqueue( ['Task3', 3])
// pQueue.enqueue( ['Task4', 5])
// pQueue.enqueue( ['Task5', 4])
// console.log(pQueue)
// console.log(['Task1', 2][1])


// SET

// add/has/remove
class PQueue {
    constructor(){
        this.tasks = [];
    }
    add(el){
        if(this.tasks.indexOf(el) === -1){
            this.tasks.push(el)
        }
    }
    has(el){
      if(this.tasks.includes(el)) return true
      return false
    }
    remove(el){
        this.tasks.splice(this.tasks.indexOf(el), 1)
    }
}

let pQueue = new PQueue();
pQueue.add(3)
pQueue.add(4)
pQueue.add(5)
pQueue.add(5)
console.log(pQueue)
// console.log(pQueue.has(3))
pQueue.remove(3)
console.log(pQueue.has(10))





