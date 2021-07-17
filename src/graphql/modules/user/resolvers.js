const db = require("../../../db");

module.exports = {

    Mutation: {
        criarUsuario: async (_, { data }) =>
            await (await db("usuarios").insert(data).returning("*"))[0],
    },
};