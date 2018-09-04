function Observer(){
    this.sourceInput = document.querySelector('#subject');
    this.sourceData = [];
    this.listeners = [];
}

Observer.prototype.init = function(){
    this.listeners = document.querySelectorAll('.listener');
    this.sourceData.length = this.listeners.length;
}

Observer.prototype.update = function(index, func){
    for ( let i = 0; i < this.sourceData.length; i++){
        if( this.sourceData[i] != 'undefined'  ){
            this.listeners[i].innerHTML = this.sourceData[i] || '';
        }
    }

    if( func ){
        let currentElement = this.listeners[index];
        func(currentElement);
    }
}

Observer.prototype.add = function(index, func){
    this.sourceData[index] = this.sourceInput.value;
    this.update(index, func);
}

const observer = new Observer();
observer.init();

observer.sourceInput.addEventListener('keyup', () => {
    observer.add(0)
    observer.add(1, function(index) {
        index.style.backgroundColor = 'red';
    })
    observer.add(2, function(index){
        index.style.backgroundColor = 'yellow';
    })
})