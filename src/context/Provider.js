import notesContext from './notesContext';
import React, { useState, useEffect } from 'react';

function Provider ({ children }) {

  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [done, setDone] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const removeNote = () => {
    setNotes(notes.filter(note => note.id !== selectedNote));
    setSelectedNote(null);
  };

  const doneNote = () => {
  const doneNotes =  done.includes(selectedNote) 
    ? done.filter(note => note !== selectedNote) 
    : [...done, selectedNote];
  setDone(doneNotes);
  setSelectedNote(null);
  };

  const clearTaskList = () => {
    setNotes([]);
    setDone([]);
    localStorage.removeItem('notes');
  };

  useEffect(() => {
    if (localStorage.getItem('notes')) {
      const localNotes = JSON.parse(localStorage.getItem('notes'))
      setNotes(localNotes);
    };

  }, []);

  const state = {
    notes,
    setNotes,
    addNote,
    removeNote,
    setSelectedNote,
    selectedNote,
    doneNote,
    done,
    clearTaskList,
  };
  
  return (
    <notesContext.Provider value={ state } >
      {children}
    </notesContext.Provider>
  )
}

export default Provider;
