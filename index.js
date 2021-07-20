const { ApolloServer } = require('apollo-server-lambda');
const graphql = require("./src/graphql");

const server = new ApolloServer({
    ...graphql,
    /* context: (event, context, callback) => {

        const user = createUser(event);

        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                user: user
            }),
        };
        callback(null, response);
    }, */
});

exports.graphqlHandler = server.createHandler({
    cors: {
        origin: 'http://localhost:3000/',
        credentials: true,
    },
});



