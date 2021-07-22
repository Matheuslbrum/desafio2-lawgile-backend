const { ApolloServer } = require('apollo-server-lambda');
const { response } = require('express');
const graphql = require("./src/graphql");


const server = new ApolloServer({
    ...graphql,
    formatError: error => {
        console.log(error)
        return error;
    },
    formatResponse: response => {
        console.log(response)
        return response;
    },
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context
    }),
    playground: true,
    tracing: true
});

exports.graphqlHandler = (event, context, callback) => {
    const handler = server.createHandler({
        cors: {
            origin: '*',
            credentials: true,
            methods: [
                "POST",
                "GET"
            ],
            allowHeaders: [
                "Content-Type",
                "Origin",
                "Accept"
            ]
        },
    });
    return handler(event, context, callback);
};
