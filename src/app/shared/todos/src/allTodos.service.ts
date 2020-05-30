import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { TodoFragments } from './todo.fragment';

export interface Response {
    todos: Todo[];
}

export interface Params {
    page: number;
    perPage?: number;
    sortField?: string;
    sortOrder?: number;
}

@Injectable({ providedIn: 'root' })
export class AllTodosGQL extends Query<Response, Params> {
    document = gql`
        query todos {
            todos: allTodos {
                id
                name
            }
        }
    `;
}