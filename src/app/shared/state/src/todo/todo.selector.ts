import { adapter, TodosState } from './todo.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Todo, emptyTodo } from 'src/app/lib/todos';

const getSelectedTodoId = (state: TodosState) => state.selectedTodoId;
const getCurrentTodo = (todoEntities: Dictionary<Todo>, todoId: string) => todoId ? todoEntities[todoId] : emptyTodo;

const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();

export const selectTodoState = createFeatureSelector<TodosState>('todos');

export const selectAllTodos = createSelector(selectTodoState, selectAll);
export const selectTodoEntities = createSelector(selectTodoState, selectEntities);
export const selectTodoIds = createSelector(selectTodoState, selectIds);
export const selectTodoTotal = createSelector(selectTodoState, selectTotal);
export const selectCurrentTodoId = createSelector(selectTodoState, getSelectedTodoId);
export const selectCurrentTodo = createSelector(selectTodoEntities, selectCurrentTodoId, getCurrentTodo);
