console.log('starting vaime.js')
const fs = require('fs')
const notes = require('./notes.js')
const _ =require('lodash')
const yargs = require('yargs')
const argv = yargs
    .command('add', 'Add a new note', {

    })
    .help()
    .argv
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
  let allNotes =   notes.getAll()
  console.log(`Printing ${allNotes.length} notes`)
  allNotes.forEach((note) =>{

  })
}else if(command === 'read'){
   let note =  notes.readAll(argv.title)
   if(note){
      console.log('note found')
   }else{
       console.log('note not found')
   }
}else if(command ==='remove'){
  let noteRemoved = notes.removeNote(argv.title)
   let message = noteRemoved ? 'note was removed' :'note not found'
   console.log(message)

}
else{
    console.log('command not recognised')
}


