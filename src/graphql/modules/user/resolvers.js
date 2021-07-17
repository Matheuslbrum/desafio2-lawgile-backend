const db = require("../../../db");

module.exports = {

    Query: {
        usuarios: async () => await db("usuarios"),
    },
    Mutation: {
        criarUsuario: async (_, { data }) =>
            await (await db("usuarios").insert(data).returning("*"))[0],
    },
};