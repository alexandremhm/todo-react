import React, { useContext } from 'react';
import notesContext from '../context/notesContext';
import '../styles/TaskList.css';

function TaskList () {
  const { notes, removeNote, saveEditedNote, editNote, setEditNote, handleTaskDoneStatus } = useContext(notesContext);

  const editNoteController = (note) => {
    const noteToEdit = notes.find(({ id }) => id === note.id);
    setEditNote(noteToEdit);
  };

  return (
    <div>
      <ul>
        {
          notes.map((note, index) => (
            <div key={index}>              
              <li className={ note.done ? 'done-task' : 'not-done-task' }>
                {`Task: ${note.task} - Type: ${note.type}`}
              </li>
              { editNote.id === note.id && <div> <input type="text" value={editNote.task} onChange={(e) => setEditNote({...editNote, task: e.target.value})} /> <button onClick={() => saveEditedNote(editNote.id, editNote.task)}>Save</button> </div> }
              <button onClick={() => removeNote(note.id)}>
                Delete
              </button>
              <button onClick={() => editNoteController(note)}>
                Edit
              </button>
              <button onClick={() => handleTaskDoneStatus(note.id)}>
                { note.done ? 'Undo' : 'Done' }
              </button>
            </div>
          ))         
        }
      </ul>
    </div>
  );
}

export default TaskList;
