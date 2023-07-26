// notes-service.js
import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export async function createNote(noteData) {
  try {
    const response = await sendRequest(BASE_URL, 'POST', noteData);

    // const data = await response.json();
    return response;
  } catch (error) {
    console.error('Error creating a new note:', error);
    throw error;
  }
}

export async function getNotes() {
    console.log('string')
  try {
    const response = await sendRequest(BASE_URL);
 
    //  const data = await response.json();
    return response;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
}
