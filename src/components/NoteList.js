import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes, deleteNote } from '../redux/actions';

const NoteList = () => {
  const notes = useSelector(state => state.notes.notes);
  const loading = useSelector(state => state.notes.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      <h1>Notes List</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.title}
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
