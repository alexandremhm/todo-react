import React, { useContext, useState } from 'react';
import notesContext from '../context/notesContext';

function TaskInput() {
  const { addNote } = useContext(notesContext);
  const [task, setTask] = useState({
    task: '',
    id: 0,
    done: false,
    type: '',
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
          type: '',
        }) } }
      />
        <label>work</label>
        <input type="radio" name="type-task" onChange={() => setTask({...task, type: "work"}) } />
        <label>home</label>
        <input type="radio" name="type-task" onChange={() => setTask({...task, type: "home"}) } />
        <label>school</label>
        <input type="radio" name="type-task" onChange={() => setTask({...task, type: "school"}) } />
      <button onClick={() => { addNote(task); setTask({
        task: '',
        id: 0,
        done: false,
        type: '',
      }); } }>Add Task</button>
    </div>
  );
}

export default TaskInput;