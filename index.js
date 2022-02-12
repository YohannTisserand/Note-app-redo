import NotesModel from "./notesModel.js"
import NotesView from "./notesView.js";

const model = new NotesModel();
model.addNotes('this is a new note');

const view = new NotesView(model);

view.displayNotes();
console.log(model.getNotes());
