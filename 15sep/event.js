const EventEmitter = require('events').EventEmitter;
const chalk = require ('chalk')
const getResource = ( c ) => {
    let e = new EventEmitter();
    process.nextTick( () => {
        let count = 0;
        e.emit('start');
        let t = setInterval( () => {
            e.emit('data', ++count);

            if( count == c){
                e.emit('end', count)
                clearInt 
            }
        }, 1000)

    })
    return e
}

let res = getResource(8) 

res.on('start', () => {
    console.log(chalk.green(`-- $started --`))
})

res.on('data', (num) => {
    console.log(chalk.yellow(`Current Number - ${num}`))
})

res.on('end', (num) => {
    console.log(`Done, last Number - ${num}`)
})


