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
      document.querySelector("#add-note-btn").addEventListener("click", () => {
        const newNote = document.querySelector("#add-note-input").value;
        this.addNewNote(newNote);
      });
    }
    displayNotes() {
      document.querySelectorAll(".note").forEach((el) => {
        el.remove();
      });
      const notes = this.model.getNotes();
      notes.forEach((note) => {
        const noteEl = document.createElement("div");
        noteEl.innerText = note;
        noteEl.className = "note";
        this.mainContainerEl.append(noteEl);
      });
    }
    addNewNote(newNote) {
      this.model.addNotes(newNote);
      this.displayNotes();
    }
  };
  var notesView_default = NotesView;

  // index.js
  var model = new notesModel_default();
  var view = new notesView_default(model);
  view.displayNotes();
  console.log(model.getNotes());
})();
