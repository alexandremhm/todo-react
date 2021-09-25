import notesContext from './notesContext';
import React, { useState, useEffect } from 'react';

function Provider ({ children }) {

  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(false);
  const [done, setDone] = useState(false);
  const [types, setTypes] = useState(["all", "work", "home", "school"]);
  const [filteredTypeTasks, setFilteredTypeTasks] = useState([]);
  const [filteredType, setFilteredType] = useState("all");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const removeNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const saveEditedNote = (id, newText) => {
    setNotes(notes.map(note => note.id === id ? { ...note, task: newText } : note));
    setEditNote(false);
  };

  const handleTaskDoneStatus = (id) => {
    setNotes(notes.map(note => note.id === id ? { ...note, done: !note.done } : note));
    setDone(!done);
  };

  const typeTaskFilter = (type) => {
    setFilteredType(type);
  };

  useEffect(() => {
    setFilteredTypeTasks(notes.filter(note => note.type === filteredType));
  }, [filteredType, notes])
  
  const state = {
    notes,
    setNotes,
    addNote,
    removeNote,
    saveEditedNote,
    editNote,
    setEditNote,
    handleTaskDoneStatus, 
    setTypes,
    types,
    filteredTypeTasks,
    filteredType,
    typeTaskFilter,
  };
  
  return (
    <notesContext.Provider value={ state } >
      {children}
    </notesContext.Provider>
  )
}

export default Provider;
