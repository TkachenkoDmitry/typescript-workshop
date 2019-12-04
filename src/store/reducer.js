import uuid from 'uuid';
import { omit } from 'lodash/fp';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';

const initialState = {
    "1": { id: '1', title: 'first todo' },
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const id = uuid();
            debugger;
            return {
                ...state,
                [id]: {
                    id,
                    title: action.title,
                    completed: false
                }
            };
        case REMOVE_TODO:
            return omit(action.id, state);
        case TOGGLE_TODO: 
            const { completed, ...rest } = state[action.id];

            return {
                ...state,
                [action.id]: {
                    ...rest,
                    completed: !completed,
                }
            }
        default:
            return state;
    }
};
