import NotesModel from "./notesModel.js"
import NotesView from "./notesView.js";
import NotesApi from "./NotesApi.js";

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model);

api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
});
console.log(model.getNotes());
