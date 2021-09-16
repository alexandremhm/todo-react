import React, { useContext } from 'react';
import notesContext from '../context/notesContext';

function TaskList () {
  const { notes } = useContext(notesContext);
  return (
    <div>
      <ul>
        {
          notes.map((note, index) => (
            <li key={index}>
              {note.task}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default TaskList;
