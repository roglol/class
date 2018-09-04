// let Task = require('./task');
// import ES6
// CommonJS
let Task = function(data){
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

Task.prototype.complete = function(){
    console.log(`completing task - ${ this.name }`);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log(`saving task - ${ this.name }`);
}


let notificationService = function(){
    let message = 'Notifying';
    this.update = function(task){
        console.log(`${ message } ${ task.user } for task ${task.name}`);
    }
}
let loggingService = function(){
    let message = 'Logging';
    this.update = function(task) {
        console.log(`${ message } ${ task.user } for task ${task.name}`);
    }
}
let auditingService = function(){
    let message = 'Auditing';
    this.update = function(task) {
        console.log(`${ message } ${ task.user } for task ${task.name}`);
    }
}

let mediator = ( function() {
    let channels = {};

    let subscribe = function(channel, context, func){
        if( !mediator.channels[channel] ) {
            mediator.channels[channel] = [];
        }

        mediator.channels[channel].push( {
            context,
            func
        } );
    }

    let publish = function(channel, ...args){
        if( !this.channels[channel] ){
            return false;
        }

        // let args = Array.prototype.slice.call(arguments, 1);

        for ( let i = 0; i < mediator.channels[channel].length; i++){
            let sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    }

    return {
        channels: {},
        subscribe,
        publish,
    }
})();

let task1 = new Task( {
    name: 'Mediator pattern demo',
    user: 'John',
});

let not = new notificationService();
let ls = new loggingService();
let audit = new auditingService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
mediator.subscribe('complete', audit, audit.update);

task1.complete = function(){
    mediator.publish('complete', this);
    // console.log(this)
    Task.prototype.complete.call(this);
}
task1.complete();

