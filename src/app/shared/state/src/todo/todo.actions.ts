import { Action, createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/lib/todos';

export enum TodosActionTypes {
    TodoSelected = '[Todos] Selected',
    LoadTodos = '[Todos] Load Data',
    TodosLoaded = '[Todos] Data Loaded',
    AddTodo = '[Todos] Add Data',
    TodoAdded = '[Todos] Data Added',
    UpdateTodo = '[Todos] Update Data',
    TodoUpdated = '[Todos] Data Updated',
    DeleteTodo = '[Todos] Delete Data',
    TodoDeleted = '[Todos] Delete Data'
}

export const SelectTodo = createAction(TodosActionTypes.TodoSelected, props<any>())
export const LoadTodos = createAction(TodosActionTypes.LoadTodos, props<any>())
export const TodosLoaded = createAction(TodosActionTypes.TodosLoaded, props<{todos: Todo[]}>())
export const AddTodo = createAction(TodosActionTypes.AddTodo, props<any>())
export const TodoAdded = createAction(TodosActionTypes.TodoAdded, props<any>())
export const UpdateTodo = createAction(TodosActionTypes.UpdateTodo, props<any>())
export const TodoUpdated = createAction(TodosActionTypes.TodoUpdated, props<any>())
export const DeleteTodo = createAction(TodosActionTypes.DeleteTodo, props<any>())
export const TodoDeleted = createAction(TodosActionTypes.TodoDeleted, props<any>())
