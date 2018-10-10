console.log('starting notes.js')

const fs = require('fs')
let fetchNotes = () =>{
    try{
        let noteString = fs.readFileSync('notes-data.json')
        return JSON.parse(noteString)
     }catch (e){
        return []
     }

}
let saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}

let  addNote =(title, body) =>{
     let notes = fetchNotes();
     let note = {
         title,
         body
     }

     let duplicateNotes = notes.filter((note)=>{
         return note.title === title
     })
     if(duplicateNotes.length ===0){
        notes.push(note)
        saveNotes(notes)
        return note
     }
    }
let getAll = () =>{
    console.log('getting all notes')
}
let readAll = (title) =>{
    console.log(`reading ${title}`)
}
let removeNote = (title) =>{
    console.log(`removing ${title}`)
}
module.exports = {
    addNote,
    getAll,
    readAll,
    removeNote
}