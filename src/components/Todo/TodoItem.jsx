import React from 'react'
import { Card, IconButton, Checkbox } from '@material-ui/core';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import Typography from '@material-ui/core/Typography';

const TodoItem = ({ id, title, completed, onDelete, toggleTodo }) => {
  return (
    <Card>
      <Checkbox onClick={() => toggleTodo(id)} checked={completed} />
      <Typography variant="body1" component="span">{title}</Typography>
      <IconButton color="danger" onClick={() => onDelete(id)}>
        <HighlightOffOutlinedIcon />
      </IconButton>
    </Card>
  )
}

export default TodoItem