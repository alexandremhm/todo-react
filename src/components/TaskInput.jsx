import React, { useContext, useState } from 'react';
import notesContext from '../context/notesContext';

function TaskInput() {
  const { addNote, setTypes, types } = useContext(notesContext);
  const [other, setOther] = useState(false);
  const [otherType, setOtherType] = useState('');

  const [task, setTask] = useState({
    task: '',
    id: 0,
    done: false,
    type: '',
  });

  const handleOtherType = (e) => {
    setOtherType(e.target.value);
  };

  const handleOtherTypeSave = () => {
    setOther(false);
    setTask({
      ...task,
      type: otherType,
    });
    setTypes([...types, otherType]);
  };

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
        <label>other</label>
        <input type="radio" name="type-task" onChange={() => setOther(true) } />
        {other && (
          <div>
            <input type="text" placeholder="Enter type" value={otherType} onChange={(e) => handleOtherType(e)} />
            <button onClick={handleOtherTypeSave}>Save</button>
          </div>
        )}
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