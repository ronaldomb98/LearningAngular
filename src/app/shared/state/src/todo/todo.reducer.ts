import { Todo } from 'src/app/shared/todos';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
// import { TodosActions, TodosActionTypes } from './todo.actions';
import * as TodoActions from './todo.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialTodos: Todo[] = [
    {
        id: '1',
        title: 'First Todo',
        description: 'Long description'
    }
]

// Defien shape
export interface TodosState extends EntityState<Todo> {
    selectedTodoId: string | null;
}

// Entity Adapter
export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

// Initial State
export const initialState: TodosState = adapter.getInitialState({
    selectedTodoId: null
});

// Todos Reducer
const reducer = createReducer(initialState,
    on(TodoActions.SelectTodo, (state, payload) => Object.assign({}, state, { selectedTodoId: payload })),
    on(TodoActions.TodosLoaded, (state, { todos }) => adapter.setAll(todos, state)),
    on(TodoActions.TodoAdded, (state, payload) => adapter.addOne(payload, state)),
    on(TodoActions.UpdateTodo, (state, payload) => adapter.updateOne({ id: payload.id, changes: payload}, state)),
    on(TodoActions.DeleteTodo, (state, payload) => adapter.setAll(payload.id, state))
);

export function TodosReducer(state: TodosState, action: Action) {
    return reducer(state, action);
}
