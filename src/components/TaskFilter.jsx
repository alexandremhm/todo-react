import React, { useContext } from 'react';
import notesContext from '../context/notesContext';

function TaskFilter (props) {

  const { typeTaskFilter } = useContext(notesContext);

  return (
    <div className="task-filter">
      <span>Filter By:</span>
      <label>all</label>
      <input type="radio" name="type-task" onChange={() => typeTaskFilter('all') } />
      <label>work</label>
      <input type="radio" name="type-task" onChange={() => typeTaskFilter('work') } />
      <label>home</label>
      <input type="radio" name="type-task" onChange={() => typeTaskFilter('home') } />
      <label>school</label>
      <input type="radio" name="type-task" onChange={() => typeTaskFilter('school') } />    
    </div>
  );
}

export default TaskFilter;
