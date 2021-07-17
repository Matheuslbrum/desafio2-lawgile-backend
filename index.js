const { ApolloServer } = require('apollo-server');
const graphql = require("./src/graphql")

const server = new ApolloServer({
    ...graphql,
});

//exports.graphqlHandler = server.createHandler();

server.listen().then(({ url }) => console.log(url));