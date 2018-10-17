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
    return fetchNotes()
}
let readAll = (title) =>{
    let notes = fetchNotes()
    let filteredNotes = notes.filter((note) => {
        return note.title === title
    })
    return filteredNotes[0]

}
let removeNote = (title) =>{
  let notes = fetchNotes()
  let filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
}
module.exports = {
    addNote,
    getAll,
    readAll,
    removeNote
}