import React, { useContext, useState } from 'react';
import notesContext from '../context/notesContext';
import SaveBtn from './SaveBtn';

function TaskInput() {
  const { addNote, removeNote, doneNote, clearTaskList } = useContext(notesContext);
  const [task, setTask] = useState({
    task: '',
    id: 0,
  });

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task"
        value={task.task}
        onChange={ (event) => { setTask({
          task: event.target.value,
          id: Date.now(),
        }) } }
      />
      <button onClick={() => { addNote(task); setTask({
        task: '',
        id: 0,
      }); } }>Add Task</button>
      <button onClick={() => { removeNote() } }>Remove Task</button>
      <button onClick = {() => { doneNote() } }>Done</button>
      <button onClick={() => { clearTaskList() } }>Clear Task List</button>
      <SaveBtn />
    </div>
  );
}

export default TaskInput;