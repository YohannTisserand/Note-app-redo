import NotesModel from './notesModel';

const notes = new NotesModel();

describe('notes model class', () => {
  it('should starts empty', () => {
    expect(notes.getNotes()).toEqual([]);
  });

  it('adds notes', () => {
    notes.addNotes('Buy shoes');
    notes.addNotes('Buy Flowers');
    expect(notes.getNotes().length).toEqual(2);
  });

  it('resets the notes', () => {
    notes.addNotes('Buy shoes');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  });
});
