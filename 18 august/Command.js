class SpecialMath {
    constructor(num){
        this._number = num;  
    }

    square(){
        return this._number ** 2;
    }

    cube(){
        return this._number ** 3;
    }

    sqRoot(){
        return Math.sqrt(this._number);
    }
}

let sq = new SpecialMath(8);
// console.log(sq.cube());
// console.log(sq.sqRoot());
// console.log(sq['square']());

// const myVar = 'square';
// sq[myVar]()

class Command {
    constructor(obj){
        this._subject = obj;
        this.commandsExecuted = [];
    }

    execute(command){
        this.commandsExecuted.push(command);
        return this._subject[command]();
    }
}

const myNum = new Command( new SpecialMath(9) );

console.log( myNum.execute('square')  )
console.log( myNum.execute('cube')  )
console.log( myNum.execute('sqRoot')  )

console.log(myNum.commandsExecuted);


