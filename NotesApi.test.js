import NotesApi from './NotesApi';

require('jest-fetch-mock').enableMocks();

describe('notes api', () => {
  it('calls fetch and load notes api', () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['buy milk']
    }));

    api.loadNotes((response) => {
      expect(response.notes).toEqual(['buy milk']);
    });
  });
});