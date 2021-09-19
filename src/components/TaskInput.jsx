import React, { useContext, useState } from 'react';
import notesContext from '../context/notesContext';

function TaskInput() {
  const { addNote } = useContext(notesContext);
  const [task, setTask] = useState({
    task: '',
    id: 0,
    done: false,
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
          done: false,
        }) } }
      />
      <button onClick={() => { addNote(task); setTask({
        task: '',
        id: 0,
      }); } }>Add Task</button>
    </div>
  );
}

export default TaskInput;