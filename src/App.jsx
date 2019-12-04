import React from 'react';
import TodoList from './components/Todo/TodoList';
import Form from './components/AddTodo/Form';

const App = () => {
  return (
    <div>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
