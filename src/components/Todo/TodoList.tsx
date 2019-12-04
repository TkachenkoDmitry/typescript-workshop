import React from 'react';
import { map } from 'lodash/fp';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { getTodos } from '../../selectors';
import { Todo, Todos, RootState } from '../../store';

const mapTodos = map<Todos, JSX.Element>(({ id, ...other }: Todo) => <TodoItem key={id} id={id} {...other} />);

export interface TodoListProps {
    todos: Todos;
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => <div>{mapTodos(todos)}</div>;


export default connect((state: RootState) => ({
    todos: getTodos(state)
}))(TodoList);
