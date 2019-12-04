import React from 'react';
import { Card, IconButton, Checkbox } from '@material-ui/core';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import Typography from '@material-ui/core/Typography';
import {
    toggleTodo as toggleTodoAction,
    removeTodo as removeTodoAction
} from '../../store/actions';
import { connect } from 'react-redux';

export interface TodoItemProps {
    id: string;
    title: string;
    completed: boolean;
    removeTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, removeTodo, toggleTodo }) => {
    return (
        <Card>
            <Checkbox onClick={() => toggleTodo(id)} checked={completed} />
            <Typography variant="body1" component="span">
                {title}
            </Typography>
            <IconButton color="primary" onClick={() => removeTodo(id)}>
                <HighlightOffOutlinedIcon />
            </IconButton>
        </Card>
    );
};

export default connect(null, dispatch => ({
    toggleTodo: (id: string) => dispatch(toggleTodoAction(id)),
    removeTodo: (id: string) => dispatch(removeTodoAction(id))
}))(TodoItem);
