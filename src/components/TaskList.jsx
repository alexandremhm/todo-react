import React, { useContext } from 'react';
import notesContext from '../context/notesContext';
import '../styles/TaskList.css';

function TaskList () {
  const {
    notes,
    removeNote, 
    saveEditedNote, 
    editNote, 
    setEditNote, 
    handleTaskDoneStatus, 
    filteredTypeTasks, 
    filteredType, 
    typeTaskFilter
  } = useContext(notesContext);

  const editNoteController = (note) => {
    const noteToEdit = notes.find(({ id }) => id === note.id);
    setEditNote(noteToEdit);
  };

  return (
    <div className="task-list-big">
        { filteredType === 'all' ?
          notes.map((note, index) => (
            <div key={index} className="task-list-container">              
              <li data-testid={`task-${index + 1}`} className={ note.done ? 'done-task' : 'not-done-task' }>
                {`${note.task} - ${note.type}`}
              </li>
              { editNote.id === note.id && <div className="extra-edit-container"> <input data-testid="edit-text-task" id="extra-edit-input" type="text" value={editNote.task} onChange={(e) => setEditNote({...editNote, task: e.target.value})} /> <button data-testid="save-btn-task" id="extra-edit-btn" onClick={() => saveEditedNote(editNote.id, editNote.task)}>Save</button> </div> }
              <button data-testid="delete-btn-task" className="btn-task-list" id="delete-btn" onClick={() => removeNote(note.id)}>
                Delete
              </button>
              <button data-testid="edit-btn-task" className="btn-task-list" id="edit-btn" onClick={() => editNoteController(note)}>
                Edit
              </button>
              <button data-testid={ note.done ? 'undo-btn' : 'done-btn' } className="btn-task-list" id={ `${note.done}-btn` } onClick={() => handleTaskDoneStatus(note.id)}>
                { note.done ? 'Undo' : 'Done' }
              </button>
            </div>
          ))
          : filteredTypeTasks.map((note, index) => (
            <div className="task-list-container" key={index}>
              <li data-testid={`ft-task-${index + 1}`} className={ note.done ? 'done-task' : 'not-done-task' }>
                {`Task: ${note.task} - Type: ${note.type}`}
              </li>
              { editNote.id === note.id && <div className="extra-edit-container" > <input data-testid="ft-edit-text-task" id="extra-edit-input" type="text" value={editNote.task} onChange={(e) => setEditNote({...editNote, task: e.target.value})} /> <button data-testid="ft-save-btn-task" id="extra-edit-btn" onClick={() => { saveEditedNote(editNote.id, editNote.task); typeTaskFilter(editNote.type)}}>Save</button> </div> }
              <button data-testid="ft-delete-btn-task" className="btn-task-list" id="delete-btn" onClick={() => removeNote(note.id)}>
                Delete
              </button>
              <button data-testid="ft-edit-btn-task" className="btn-task-list" id="edit-btn" onClick={() => editNoteController(note)}>
                Edit
              </button>
              <button data-testid={ note.done ? 'ft-undo-btn' : 'ft-done-btn' } id={ `${note.done}-btn` } onClick={() => handleTaskDoneStatus(note.id)}>
                { note.done ? 'Undo' : 'Done' }
              </button>
            </div>
          ))   
        }
    </div>
  );
}

export default TaskList;
