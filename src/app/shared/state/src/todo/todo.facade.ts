import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { TodosState } from './todo.reducer';
import * as TodosActions from './todo.actions';
import { Todo } from 'src/app/lib/todos';

@Injectable({ providedIn: 'root'})
export class TodosHandler {

    constructor(private store: Store<TodosState>) {}

    selectTodo(id) {
        this.store.dispatch(TodosActions.SelectTodo(id));
    }

    loadTodos() {
        this.store.dispatch(TodosActions.LoadTodos({}));
    }

    addTodo(todo: Todo) {
        this.store.dispatch(TodosActions.AddTodo(todo));
    }

    updateTodo(todo: Todo) {
        this.store.dispatch(TodosActions.UpdateTodo(todo));
    }

    deleteTodo(todo: Todo) {
        this.store.dispatch(TodosActions.DeleteTodo(todo))
    }
}