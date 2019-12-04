import { combineReducers } from 'redux';
import { todoReducer } from './reducer';
import { createStore } from 'redux';

const todoApp = combineReducers({
    todos: todoReducer,
});

const store = createStore(todoApp);

export default store;
