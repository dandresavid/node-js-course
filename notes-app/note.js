const fs = require('fs')
const chalk = require('chalk')

const readNotes = (title) => {
  const notes = loadNotes()
  const note = notes.find((note)=> note.title === title)

  debugger
  if (note) {
      console.log(chalk.blue.inverse(note.title + ':' + note.body))
      console.log(note.body)
  } else {
    console.log(chalk.red.inverse('No note found'))
  }
}

const addNote = (title,body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note)=> note.title === title)
  if (!duplicateNote) {
      notes.push({
        title: title,
        body: body
      })
      saveNotes(notes)
      console.log(chalk.green.inverse('New note added'))
  } else {
    console.log(chalk.red.inverse('Note title taken'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note)=> note.title !== title)
  if (notes.length === notesToKeep.length){
    console.log(chalk.red.inverse('No note removed!'))
  } else {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return[]
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blue.inverse('Notes Listed'))
  notes.forEach((note) => {
    console.log(chalk.red.inverse(note.title))
  })
}

module.exports =  {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
}
