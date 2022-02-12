import NotesModel from "./notesModel.js"
import NotesView from "./notesView.js";

const model = new NotesModel();
const view = new NotesView(model);

view.displayNotes();
console.log(model.getNotes());
