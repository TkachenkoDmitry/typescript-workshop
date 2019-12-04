import React from 'react';
import { Card, IconButton, Checkbox } from '@material-ui/core';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import Typography from '@material-ui/core/Typography';
import {
    toggleTodo as toggleTodoAction,
    removeTodo as removeTodoAction
} from '../../store/actions';
import { connect } from 'react-redux';

const TodoItem = ({ id, title, completed, removeTodo, toggleTodo }) => {
    return (
        <Card>
            <Checkbox onClick={() => toggleTodo(id)} checked={completed} />
            <Typography variant="body1" component="span">
                {title}
            </Typography>
            <IconButton color="danger" onClick={() => removeTodo(id)}>
                <HighlightOffOutlinedIcon />
            </IconButton>
        </Card>
    );
};

export default connect(null, dispatch => ({
    toggleTodo: id => dispatch(toggleTodoAction(id)),
    removeTodo: id => dispatch(removeTodoAction(id))
}))(TodoItem);
