import NotesApi from './NotesApi';

require('jest-fetch-mock').enableMocks();

const api = new NotesApi();

describe('notes api', () => {
  it('calls fetch and load notes api', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['buy milk']
    }));

    api.loadNotes((response) => {
      expect(response.notes).toEqual(['buy milk']);
    });
  });

  it('creates notes', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      content: 'I am a new note'
    }));
    api.createNote('I am a new note', (response) => {
      expect(response.content).toEqual['I am a new note']
    });
  });
});
