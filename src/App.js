import './App.css';
import React from 'react';
import Todo from './pages/Todo';
import Provider from './context/Provider';

function App() {
  return (
    <div className="app-container">
      <Provider>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
