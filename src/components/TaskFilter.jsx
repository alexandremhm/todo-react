import React, { useContext } from 'react';
import notesContext from '../context/notesContext';
import '../styles/TaskFilter.css';

function TaskFilter (props) {

  const { typeTaskFilter, types } = useContext(notesContext);

  return (
    <div className="task-filter-container">
      <h3>Filter By:</h3>
      { types && types.map(type => (
        <label id="filter-label">{type}
          <input 
            type="radio" 
            name="type-task" 
            value={type} 
            onChange={() => typeTaskFilter(type)}
            className="filter-input" 
            />        
        </label>
      ))}
    </div>
  );
}

export default TaskFilter;
