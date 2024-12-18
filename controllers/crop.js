const cropDB = require("../db/crop");

module.exports = {

    getAll: async function () {
        return await cropDB.getAll();
    },

    getByGrape: async function (grape) {
        return await cropDB.getByGrape(grape);
    },

    getByID: async function (id) {
        return await cropDB.getByID(id);
    },

    add: async function (id, grape, year, quantity) {
        return await cropDB.add(id, grape, year, quantity);
    },

    deleteByID: async function (id) {
        return await cropDB.deleteByID(id);
    },

}