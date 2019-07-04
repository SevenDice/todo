import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'


const App = () => {
  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Make awesome app', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3},
  ];

  const loginBox = <p>Log in please</p>;
  const isLoggedIn = true;
  const welcomeBox = <p>Welcome Back</p>

  return (
    <div>
    {isLoggedIn ? welcomeBox : loginBox}
    <span>{(new Date()).toString()}</span>
    <AppHeader />
    <SearchPanel />
    <TodoList todos={todoData}/>
  </div>
  );
};


ReactDOM.render(<App/>, document.getElementById('root'));