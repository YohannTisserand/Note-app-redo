(() => {
  // notesModel.js
  var NotesModel = class {
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
  };
  var notesModel_default = NotesModel;

  // index.js
  var model = new notesModel_default();
  console.log(model.getNotes());
})();
