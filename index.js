const NotesModel = require('./notesModel')
const model = new NotesModel();
console.log('The notes app is running');
model.addNote('Buy milk');
console.log(model.getNotes());