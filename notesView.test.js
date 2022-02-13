/**
 * @jest-environment jsdom
 */

import { readFileSync } from 'fs';
import NotesModel from './notesModel.js';
import NotesView from './notesView.js';
import NotesApi from './NotesApi.js';
require('jest-fetch-mock').enableMocks();

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

  it('adds a new note', () => {
    document.body.innerHTML = readFileSync('./index.html');

    fetch.mockResponseOnce(JSON.stringify({
      note: 'This is a new note'
    }));


    const model = new NotesModel();
    const view = new NotesView(model);
    const notesApi = new NotesApi();

    const input = document.querySelector('#add-note-input');
    input.value = 'This is a new note';

    const button = document.querySelector('#add-note-btn');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1)
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('This is a new note')
  });

  it('prevents double notes on click', () => {
    document.body.innerHTML = readFileSync('./index.html');

    const model = new NotesModel;
    const view = new NotesView(model);

    model.addNotes('first note');
    model.addNotes('second note');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});