import React, { useContext } from 'react';
import notesContext from '../context/notesContext';

function TaskFilter (props) {

  const { typeTaskFilter, types } = useContext(notesContext);

  return (
    <div className="task-filter">
      <span>Filter By:</span>
      { types && types.map(type => (
        <label>{type}
        <input type="radio" name="type-task" value={type} onChange={() => typeTaskFilter(type)} />        
        </label>))}          
    </div>
  );
}

export default TaskFilter;
