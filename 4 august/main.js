
// let storage = window.sessionStorage
// document.getElementById('button1').addEventListener('click', function(){
//     storage.setItem('name', input1.value)
//     storage.setItem('surname', input2.value)
//     storage.setItem('age', input3.value) ;
// })
// document.getElementById('button2').addEventListener('click', function(){
//     par1.innerHTML = storage.getItem('name')
//     par2.innerHTML = storage.getItem('surname')
//     par3.innerHTML = storage.getItem('age')
    
// })

// let ids = [9000, 9001, 9002]
// let iteratorF = ids[Symbol.iterator]()
// console.log(iteratorF.next())
// console.log(iteratorF.next())
// console.log(iteratorF.next())
// console.log(iteratorF.next())
let ids = {
    startId : 113,
    endId: 500,
    [Symbol.iterator](){
        let self = this;
       return {
           next() {
               let value =  self.startId > self.endId ? undefined : self.startId++
               let done = !value
               return {value,done}
               
           }
       }
    }
}

let myIds = ids[Symbol.iterator]();
ids.startId = 1;
ids.endId = 15;

// for( let id of ids){
//     if(id > 200) break;
//     console.log(id)
// }


