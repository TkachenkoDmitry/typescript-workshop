import React, { useState } from 'react';
import { IconButton, Grid, OutlinedInput } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { addTodo as addTodoAction } from '../../store/actions';

export interface FormProps {
    addTodo: (id : string) => void;
}

const Form = ({ addTodo }: FormProps) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    };

    return (
        <Grid component="form" onSubmit={handleSubmit} container justify="center">
            <OutlinedInput
                labelWidth={0}
                value={todo}
                onChange={e => setTodo(e.target.value)}
                placeholder="New Todo"
            />
            <IconButton color="primary" aria-label="directions" type="submit">
                <AddIcon />
            </IconButton>
        </Grid>
    );
};

export default connect(undefined, dispatch => ({
    addTodo: (value: string) => dispatch(addTodoAction(value))
}))(Form);
