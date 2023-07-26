import React, { useEffect, useState } from 'react';
import { checkToken } from '../../utilities/users-service';
import { getNotes } from '../../utilities/notes-service';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchNotes() {
    try {
      const newNotes = await getNotes();
      console.log(newNotes)
      setNotes(newNotes);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  async function handleCheckToken() {
    const expDate = await checkToken();
    alert(expDate);
  }

  return (
    <>
      <h1>Notes</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}