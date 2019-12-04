import React from 'react'
import { Card, Avatar } from '@material-ui/core';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

const TodoItem = ({ id, title, onDelete, toggleTodo }) => {
  return (
    <Card>
      <span onClick={() => toggleTodo(id)}>mark completed</span>
      <span>{title}</span>
      <Avatar onClick={() => onDelete(id)}>
        <HighlightOffOutlinedIcon />
      </Avatar>
    </Card>
  )
}

export default TodoItem