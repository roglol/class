class Board {
    constructor(id){
        this._id = id;
        this._element = null;
        this._resetFont = '';
        this._resetColor = '';
        this._resetBorderWidth = ''; 
    }

    init(){
        // this._element = document.querySelector(`#${this._id}`);
        this._element = document.getElementById(this._id);
        this.updateFontSize( this._resetFont = getComputedStyle(this._element).fontSize);
        this.updateColor(this._resetColor = getComputedStyle(this._element).color)
        this.updateBorderWidth(this._resetBorderWidth = getComputedStyle(this._element).borderWidth);
    }
    updateFontSize(fontSize){
        this._element.style.fontSize = fontSize;
    }
    updateColor(color){
        this._element.style.color = color;
    }
    updateBorderWidth(width){
        this._element.style.borderWidth = width;
    }
    reset(method){
        switch(method){
           case 'updateFontSize':
            this._element.style.fontSize = this._resetFont;
           break;
           case 'updateColor':
            this._element.style.color = this._resetColor;
           break;
           case 'updateBorderWidth':
            this._element.style.borderWidth = this._resetBorderWidth;
           break;
        }
    }
}

class Command {
    constructor(obj){
        this._subject = obj;
        this.commandsExecuted = [];
        this.valuesUsed = [];
        this.nextCommands = [];
        this.nextValues = [];
    }

    execute(command, value){
        this.commandsExecuted.push(command);
        this.valuesUsed.push(value);
        return this._subject[command](value);
    }

    back(){
        if( this.commandsExecuted.length ){
            let lastCommand = this.commandsExecuted.pop();
            let lastCommandValue = this.valuesUsed.pop();

            this.nextCommands.push(lastCommand)
            this.nextValues.push(lastCommandValue);
            
            if (this.commandsExecuted.includes(lastCommand)){
                // Improve Perf
                this.commandsExecuted.forEach((command, index )=> {
                    this._subject[command](this.valuesUsed[index]);
                })
            }
            else {
                this._subject.reset(lastCommand);
            }
        }
        else {
            alert("Can't go back!...")
        }
    }

    next(){
        if( this.nextCommands.length ){
            let nextCommand = this.nextCommands.pop();
            let nextValue = this.nextValues.pop();
            this.execute(nextCommand, nextValue);
        }
        else {
            alert("Can't go next")
        }
    }
}



const board = new Board('board');
board.init();

let boardHistory = new Command(board);

boardHistory.execute('updateBorderWidth', '5px');
boardHistory.execute('updateColor', 'green');
boardHistory.execute('updateFontSize', '3em');
boardHistory.execute('updateFontSize', '4em');
boardHistory.execute('updateFontSize', '5em');

console.log(boardHistory.commandsExecuted);
console.log(boardHistory.valuesUsed);

// boardHistory.back();
boardHistory.back();
boardHistory.next();
// boardHistory.next();

// boardHistory.back();


console.log(getComputedStyle(document.getElementById('board')).fontSize)