import React, { useState } from 'react'
import { InputBase, Paper, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

const Form = () => {
  const [todo, setTodo] = useState('');
  return (
    <Paper component="form">
      <InputBase
        label="New Todo" value={todo}
        onChange={(e) => setTodo(e.target.value)}
        inputProps={{ 'aria-label': 'Add new Todo' }}
        placeholder="New Todo"
      />
      <IconButton color="primary" aria-label="directions" type="submit">
        <AddIcon />
      </IconButton>
    </Paper>
  )
}

export default Form
