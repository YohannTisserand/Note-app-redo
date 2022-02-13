class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNotes(item) {
    this.notes.push(item);
  }

  reset() {
    this.notes = [];
  }

  setNotes(array) {
    this.notes = array;
  }
}

export default NotesModel;
