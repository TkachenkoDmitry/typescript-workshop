export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export type TodoAction = 
    | { type: 'ADD_TODO', title: string }
    | { type: 'REMOVE_TODO' | 'TOGGLE_TODO', id: string }

export const addTodo = (title: string): TodoAction => ({
    type: ADD_TODO,
    title
});

export const removeTodo = (id: string): TodoAction => ({
    type: REMOVE_TODO,
    id,
});

export const toggleTodo = (id: string): TodoAction => ({
    type: TOGGLE_TODO,
    id,
});
