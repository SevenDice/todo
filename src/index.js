import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Learn React', 'Build Awesome App'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
}

const SearchPanel = () => {
  return <input placeholder='search' />;
}

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