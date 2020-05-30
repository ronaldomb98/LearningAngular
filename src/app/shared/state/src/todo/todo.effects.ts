import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { TodoService, AllTodosGQL } from 'src/app/lib/todos';
import * as fromTodoActions from './todo.actions';
import { mergeMap, map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class TodoEffects {

    constructor(private todoService: TodoService,
        private allTodosService: AllTodosGQL,
        private actions$: Actions) {}

    public loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTodoActions.TodosActionTypes.LoadTodos),
            mergeMap(() => this.allTodosService.fetch().pipe(
                map(({data: { todos }}) => fromTodoActions.TodosLoaded({todos}))
            ))
        )
    )

}