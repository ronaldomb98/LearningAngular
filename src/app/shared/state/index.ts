import { TodosState, TodosReducer } from './src/todo/todo.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    todos: TodosState;
}

export const reducers: ActionReducerMap<AppState> = {
    todos: TodosReducer,
};

export * from './src/todo/todo.facade';
export * from './src/todo/todo.selector';