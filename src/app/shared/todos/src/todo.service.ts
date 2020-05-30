import { Injectable } from "@angular/core";
import { Query } from 'apollo-angular';
import { Todo } from './todo.model';
import gql from 'graphql-tag';
import { TodoFragments } from './todo.fragment';

export interface Response {
    todo: Todo;
}

export interface Params {
    id: string;
}

@Injectable({ providedIn: 'root' })
export class TodoService extends Query<Response, Params> {
    document = gql`
        query Todo {
            ...TodoFragment
        }
        ${TodoFragments.todo}
    `;
}
