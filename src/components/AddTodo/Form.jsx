import React, { useState } from 'react';
import { InputBase, Paper, IconButton, Grid, Input, OutlinedInput } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { addTodo as addTodoAction } from '../../store/actions';

const Form = ({ addTodo }) => {
    const [todo, setTodo] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    };

    return (
        <Grid component="form" onSubmit={handleSubmit} container justify="center">
            <OutlinedInput
                label="New Todo"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                inputProps={{ 'aria-label': 'Add new Todo' }}
                placeholder="New Todo"
            />
            <IconButton color="primary" aria-label="directions" type="submit">
                <AddIcon />
            </IconButton>
        </Grid>
    );
};

export default connect(undefined, dispatch => ({
    addTodo: value => dispatch(addTodoAction(value))
}))(Form);
