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

  // notesView.js
  var NotesView = class {
    constructor(model2) {
      this.model = model2;
      this.mainContainerEl = document.querySelector("#main-container");
    }
    displayNotes() {
      const notes = this.model.getNotes();
      notes.forEach((note) => {
        const noteEl = document.createElement("div");
        noteEl.innerText = note;
        noteEl.className = "note";
        this.mainContainerEl.append(noteEl);
      });
    }
  };
  var notesView_default = NotesView;

  // index.js
  var model = new notesModel_default();
  model.addNotes("this is a new note");
  var view = new notesView_default(model);
  view.displayNotes();
  console.log(model.getNotes());
})();
