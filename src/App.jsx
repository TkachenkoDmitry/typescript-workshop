import React from 'react';
import TodoList from './components/Todo/TodoList';
import Form from './components/AddTodo/Form';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Form />
      <TodoList />
    </Container>
  );
}

export default App;
