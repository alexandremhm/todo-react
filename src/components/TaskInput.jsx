import React, { useContext, useState } from 'react';
import notesContext from '../context/notesContext';
import '../styles/TaskInput.css';

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

  const handleOtherState = () => {
    setOther(false)
  }

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
      <div className="task-input-text-container">
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
          className="task-text-input"
          data-testid="text-input"
        />
          <button
            data-testid="add-task-button"
            className="task-save-button"
            onClick={() => { addNote(task); setTask({
            task: '',
            id: 0,
            done: false,
            type: '',
          }); } }>Add Task</button>
      </div>
      <section id="inputs-radio-tasks">
        <label className="input-label">work</label>
        <input data-testid="work-type" type="radio" name="type-task" onChange={() => { setTask({...task, type: "work"}); handleOtherState() } } />
        <label className="input-label">home</label>
        <input data-testid="home-type" type="radio" name="type-task" onChange={() => { setTask({...task, type: "home"}); handleOtherState() }} />
        <label className="input-label">school</label>
        <input data-testid="school-type" type="radio" name="type-task" onChange={() => { setTask({...task, type: "school"}); handleOtherState() } } />
        <label className="input-label">other</label>
        <input data-testid="other-type" type="radio" name="type-task" onChange={() => setOther(true) } />
        {other && (
          <div className="other-save">
            <input data-testid="text-other-input" id="other-text-input" type="text" placeholder="Enter type" value={otherType} onChange={(e) => handleOtherType(e)} />
            <button data-testid="btn-other-input" id="other-save-button" onClick={handleOtherTypeSave}>Save</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default TaskInput;