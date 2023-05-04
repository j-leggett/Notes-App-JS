class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    this.model.notes.forEach(note => {
      let div = document.createElement('div');
      div.textContent = note;
      div.className = "note";
      this.mainContainerEl.append(div);
    })
  }
}

module.exports = NotesView