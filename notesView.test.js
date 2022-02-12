/**
 * @jest-environment jsdom
 */

import { readFileSync } from 'fs';
import NotesModel from './notesModel.js';
import NotesView from './notesView.js';

describe('notes view class', () => {
  it('displays the notes', () => {
    document.body.innerHTML = readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNotes('A note');
    model.addNotes('Another note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});