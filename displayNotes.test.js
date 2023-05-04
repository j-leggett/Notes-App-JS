/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('./displayNotes')
const NotesModel = require('./notesModel')

describe('displayNotes' , () => {
  it('creates a div for each new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    
    const model = new NotesModel();
    model.addNote('Buy milk')
    const view = new NotesView(model);
    
    view.displayNotes()

    expect(document.querySelectorAll('div.note').length).toEqual(1)
    
  })
})