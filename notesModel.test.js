import NotesModel from './notesModel';

const notes = new NotesModel();

describe('notes model class', () => {
  it('should starts empty', () => {
    expect(notes.getNotes()).toEqual([]);
  });
});