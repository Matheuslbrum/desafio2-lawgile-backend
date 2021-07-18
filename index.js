const { ApolloServer } = require('apollo-server-lambda');
const graphql = require("./src/graphql")

const server = new ApolloServer({
    ...graphql,
});

exports.graphqlHandler = server.createHandler();

