import React, { useContext } from 'react';
import notesContext from '../context/notesContext';

function TaskList () {
  const { notes, removeNote } = useContext(notesContext);
  return (
    <div>
      <ul>
        {
          notes.map((note, index) => (
            <div key={index}>              
              <li>
                {note.task}
              </li>
              <button onClick={() => removeNote(note.id)}>
                Delete
              </button>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default TaskList;
