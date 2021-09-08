import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

function Todo() {
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div> 
    );
}

export default Todo;
