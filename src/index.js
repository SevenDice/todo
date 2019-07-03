import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'


const App = () => {

  const loginBox = <p>Log in please</p>;
  const isLoggedIn = true;
  const welcomeBox = <p>Welcome Back</p>

  return (
    <div>
    {isLoggedIn ? welcomeBox : loginBox}
    <span>{(new Date()).toString()}</span>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
  );
};


ReactDOM.render(<App/>, document.getElementById('root'));