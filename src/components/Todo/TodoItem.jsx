import React from 'react'

export const TodoItem = ({ id, title, onDelete, toggleTodo }) => {
  return (
    <div>
      <span onClick={() => toggleTodo(id)}>mark completed</span>
      <span>{title}</span>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  )
}
