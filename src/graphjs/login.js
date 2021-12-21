import { jsonToGraphQLQuery } from 'json-to-graphql-query';

import { jsonToGraphQLQuery, VariableType, EnumType } from 'json-to-graphql-query';
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        access_token
        expires_in
        user {
            id
            email
            name
            created_at
            updated_at
        }
    }
}

const login = {
    mutation {
        login(input: {
            username: "charl@isa.co.za",
            password: "1234"
        }) {
            access_token
            refresh_token
            expires_in
            token_type
        user {
                id
                email
                name
                created_at
                updated_at
            }
        }
    }

query(email: $email, password: $password) {
    access_token
    expires_in
        user {
        id
        email
        name
        created_at
        updated_at
    }
}
const graphql_query = jsonToGraphQLQuery(query, { pretty: true });