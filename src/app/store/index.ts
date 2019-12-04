import { combineReducers } from 'redux';
import { todoReducer } from './reducer';
import { createStore } from 'redux';

const rootReducer = combineReducers({
    todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export * from './types';
export default store;
