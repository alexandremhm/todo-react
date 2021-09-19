import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';

//  tests

function Todo() {
  return (
    <div>
      <TaskInput />
      <TaskFilter />
      <TaskList />

    </div> 
    );
}

export default Todo;
