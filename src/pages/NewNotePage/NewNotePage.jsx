import { useState } from 'react';
import { createNote } from '../../utilities/notes-service';

export default function NewNotePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const noteData = { title, content };
      const newNote = await createNote(noteData);
      console.log('New note created:', newNote);
      // You can update your state or do something with the newNote if needed
      // For example, you might want to redirect to the notes list page:
      // history.push('/notes');
    } catch (error) {
      console.error('Failed to create a new note:', error.message);
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <button type="submit">Add Note</button>

      {error && <p>Error: {error}</p>}
    </form>
  );
}
