import React from 'react';
import { map } from 'lodash/fp';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { getTodos } from '../../selectors';

const mapTodos = map(({ id, ...other }) => <TodoItem key={id} id={id} {...other} />);

const TodoList = ({ todos, onDelete, toggleTodo }) => <div>{mapTodos(todos)}</div>;

export default connect(state => ({
    todos: getTodos(state)
}))(TodoList);
