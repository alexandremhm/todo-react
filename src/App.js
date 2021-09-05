import './App.css';
import React from 'react';
import Todo from './pages/Todo';
import Provider from './context/Provider';

function App() {
  return (
      <Provider>
        <Todo />
      </Provider>
  );
}

export default App;
