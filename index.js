const NotesModel = require('./notesModel')
const NotesView = require('./displayNotes')

// setup the model
const model = new NotesModel();
model.addNote('This is an example note')

// setup the view
const view = new NotesView(model);

//make the view display notes
view.displayNotes()
console.log('The notes app is running');
