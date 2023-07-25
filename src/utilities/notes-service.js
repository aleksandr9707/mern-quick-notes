// notes-service.js
import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export async function createNote(noteData) {
  try {
    const response = await sendRequest(BASE_URL, 'POST', noteData);
    if (!response.ok) {
      throw new Error('Failed to create a new note.');
    }
    const data = await response.json();
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
    // if (!response.ok) {
    //   throw new Error('Failed to fetch notes.');
    // }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
}
