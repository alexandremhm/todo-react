import React, { useContext, useState } from 'react';
import notesContext from '../context/notesContext';
import '../styles/taskSelected.css';

function TaskList () {
  const { setNotes, notes, selectedNote, setSelectedNote, done } = useContext(notesContext);
  const [taskId, setTaskId] = useState(null);
  const [taskText, setTaskText] = useState('');

  const handleSaveEdit = () => {
    setNotes(
      notes.map((note) => {
        if (note.id === taskId) {
          const editedNote = note;
          editedNote.task = taskText;
          return editedNote;
        }
        return note;
      })            
    );
    setTaskId(null);
  }


  return (
    <div>
      <ul>
        {
          notes.map(({ task, id }) => {
            return taskId === id ? (
              <>
                <input 
                  type="text" 
                  value={ taskText }
                  onChange={ e => setTaskText(e.target.value) }
                  />
                <button onClick={ () => {
                  handleSaveEdit();
                } }>Save</button>
              </ >
            ) : (
            <li 
            className={`${selectedNote === id ? 'selected' : '' } ${ done.includes(id) ? 'done' : ''}`}
            onClick = {() => { selectedNote === id ? setSelectedNote(null) : setSelectedNote(id)}}
            key={id}
            >
              {task}
              <button onClick={ () => { setTaskId(id); setTaskText(task);}}>Edit</button>
            </li>)
          }
          
          )
        }
      </ul>
    </div>
  );
}

export default TaskList;
