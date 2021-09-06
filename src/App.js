import './App.css';
import React from 'react';
import Todo from './pages/Todo';
import TodoList from './pages/TodoList';
import Provider from './context/Provider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Provider>
        <Router>        
          <Switch>
            <Route exact path="/">
              <Todo />
            </Route>
            <Route path="/todo">
              <TodoList />
            </Route>
          </Switch>    
        </Router>    
      </Provider>
  );
}

export default App;
