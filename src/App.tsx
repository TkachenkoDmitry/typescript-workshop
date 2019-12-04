import React from 'react';
import TodoList from './components/Todo/TodoList';
import Form from './components/AddTodo/Form';

const App: React.FC = () => {
  return (
    <div>
      <Form />
      <TodoList todos={[{ id: "wg", title: 'first todo' }]} onDelete={() => { }} toggleTodo={() => { }} />
    </div>
  );
}

export default App;
