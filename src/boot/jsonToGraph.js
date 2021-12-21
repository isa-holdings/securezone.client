import { jsonToGraphQLQuery } from 'json-to-graphql-query';

export default async ({ app }) => {
    app.provide('jsonToGraph', jsonToGraphQLQuery);
}