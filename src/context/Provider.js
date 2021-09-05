import notesContext from './notesContext';
import React, { useState } from 'react';

function Provider ({ children }) {

  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const removeNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const state = {
    notes,
    setNotes,
    addNote,
    removeNote,
  };
  
  return (
    <notesContext.Provider value={ state } >
      {children}
    </notesContext.Provider>
  )
}

export default Provider;
