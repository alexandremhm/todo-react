import React, { useContext } from 'react';
import notesContext from '../context/notesContext';
import '../styles/TaskList.css';

function TaskList () {
  const { notes, removeNote, saveEditedNote, editNote, setEditNote, handleTaskDoneStatus, filteredTypeTasks, filteredType } = useContext(notesContext);

  const editNoteController = (note) => {
    const noteToEdit = notes.find(({ id }) => id === note.id);
    setEditNote(noteToEdit);
  };

  return (
    <div>
      <ul>
        { filteredType === 'all' ?
          notes.map((note, index) => (
            <div key={index} className="task-list-container">              
              <li className={ note.done ? 'done-task' : 'not-done-task' }>
                {`${note.task} - ${note.type}`}
              </li>
              { editNote.id === note.id && <div className="extra-edit-container"> <input id="extra-edit-input" type="text" value={editNote.task} onChange={(e) => setEditNote({...editNote, task: e.target.value})} /> <button id="extra-edit-btn" onClick={() => saveEditedNote(editNote.id, editNote.task)}>Save</button> </div> }
              <button className="btn-task-list" id="delete-btn" onClick={() => removeNote(note.id)}>
                Delete
              </button>
              <button className="btn-task-list" id="edit-btn" onClick={() => editNoteController(note)}>
                Edit
              </button>
              <button className="btn-task-list" id={ `${note.done}-btn` } onClick={() => handleTaskDoneStatus(note.id)}>
                { note.done ? 'Undo' : 'Done' }
              </button>
            </div>
          ))
          : filteredTypeTasks.map((note, index) => (
            <div className="task-list-container" key={index}>
              <li className={ note.done ? 'done-task' : 'not-done-task' }>
                {`Task: ${note.task} - Type: ${note.type}`}
              </li>
              { editNote.id === note.id && <div className="extra-edit-container" > <input id="extra-edit-input" type="text" value={editNote.task} onChange={(e) => setEditNote({...editNote, task: e.target.value})} /> <button  id="extra-edit-btn" onClick={() => saveEditedNote(editNote.id, editNote.task)}>Save</button> </div> }
              <button className="btn-task-list" id="delete-btn" onClick={() => removeNote(note.id)}>
                Delete
              </button>
              <button className="btn-task-list" id="edit-btn" onClick={() => editNoteController(note)}>
                Edit
              </button>
              <button className="btn-task-list" id={ `${note.done}-btn` } onClick={() => handleTaskDoneStatus(note.id)}>
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
