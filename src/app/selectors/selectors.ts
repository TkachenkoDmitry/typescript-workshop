import { get } from 'lodash/fp';
import { RootState } from '../store';

export const getTodos = get<RootState, 'todos'>('todos');
