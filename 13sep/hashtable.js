class Hashtable {
    constructor(){
        this.hashs =  new Array(255);
    }

    add(value){
     this.hashs[this.hash(value, 255)] = value;
    }
    check(value){
        return !!this.hashs[this.hash(value, 255)];
    }
    hash(value, max){
       let num = 0;
       for( let i = 0; i < value.length; i++){
           num += value.charCodeAt(i) * i;
      }

      return num % max;
    }
    delete(value){
        if(hTable.check(value)){
            this.hashs.splice(this.hash(value, 255), 1)
        }
    }
}

let hTable = new Hashtable;
console.log(hTable.add('TEST'))
console.log(hTable.check('TEST'))
hTable.delete('TEST')
console.log(hTable)