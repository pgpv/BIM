const winemakerDB = require("../db/winemaker");

module.exports = {

    getAll: async function () {
        return await winemakerDB.getAll();
    },

    getByLocation: async function (location) {
        return await winemakerDB.getByLocation(location);
    },

    getByName: async function (name) {
        return await winemakerDB.getByName(name);
    },

    add: async function (name, location) {
        return await winemakerDB.add(name, location);
    },

    deleteByName: async function (name) {
        return await winemakerDB.deleteByName(name);
    },

}
