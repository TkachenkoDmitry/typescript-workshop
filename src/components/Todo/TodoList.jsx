import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, toggleTodo }) => (
  <div>
    {todos.map(({ key, ...other }) => (
      <TodoItem
        key={key}
        onDelete={onDelete}
        toggleTodo={toggleTodo}
        {...other}
      />
    )
    )}
  </div>
)

export default TodoList;
