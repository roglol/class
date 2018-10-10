console.log('starting vaime.js')
const fs = require('fs')
const notes = require('./notes.js')
const _ =require('lodash')
const yargs = require('yargs')
const argv = yargs.argv
let command = process.argv[2]
console.log('Yargs',argv)
if(command ==='add'){
  let note =  notes.addNote(argv.title, argv.body)
  if(note){
     console.log('Note created')
  }else{
     console.log('Note title taken')
}
}else if(command === 'list'){
    notes.getAll()
}else if(command === 'read'){
    notes.readAll(argv.title)
}else if(command ==='remove'){
    notes.removeNote(argv.title)
}
else{
    console.log('command not recognised')
}


