import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import '../styles/Todo.css';
import Header from '../components/Header';

//  tests

function Todo() {
  return (
    <div>
      <div className="task-big-container">
        <Header />
        <TaskInput />
        <TaskFilter />
      </div>
      <TaskList />
    </div> 
    );
}

export default Todo;
