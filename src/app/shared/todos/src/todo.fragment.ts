import gql from 'graphql-tag';

export const TodoFragments = {
    todo: gql`
        fragment TodoFragment on Query {
            id
            name
        }
    `
}