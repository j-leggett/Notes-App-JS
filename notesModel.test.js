const NotesModel = require('./notesModel')

describe('notesModel', () => {

  let model;

  beforeEach(() => {
    model = new NotesModel();
  })

  it('initalises with an empty array', () => {
    expect(model.getNotes()).toEqual([])
  })

  it('adds a note to the array and prints it', () => {
    model.addNote('Buy milk')
    expect(model.getNotes()).toEqual(['Buy milk'])
  })

  it('resets the notes array', () => {
    model.addNote('Buy milk')
    model.reset()
    expect(model.getNotes()).toEqual([])
  })

  it('adds mutliple notes to notes array', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
  })
})