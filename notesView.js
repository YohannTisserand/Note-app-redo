import NotesApi from "./NotesApi.js";
class NotesView {
  constructor(model, api = new NotesApi()) {
    this.model = model
    this.api = api
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(el => {
      el.remove();
    });

    const notes = this.model.getNotes();

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }

  addNewNote(newNote) {
    this.model.addNotes(newNote);
    this.api.createNote(newNote);
    this.displayNotes();
  }
}

export default NotesView;
