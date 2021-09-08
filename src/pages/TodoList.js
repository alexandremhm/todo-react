import React,  { useContext } from 'react';
import notesContext from '../context/notesContext';

function TodoList() {
  const { notes } = useContext(notesContext);

  return (
    <ul>
      {notes.map(({ task, id }) => (
        <li key={ id }>{ task }</li>
      ))}
    </ul>
  );
}

export default TodoList;
