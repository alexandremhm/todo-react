import React, { useContext } from 'react';
import notesContext from '../context/notesContext';

function TaskList () {
  const { notes, removeNote } = useContext(notesContext);
  return (
    <div>
      <ul>
        {
          notes.map(({ task, id }) => (
            <li 
            onDoubleClick = {() => removeNote(id)}
            key={id}
            >
              {task}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default TaskList;
