const wineDB = require("../db/wine");

module.exports = {

    getAll: async function () {
        return await wineDB.getAll();
    },

    getByName: async function (name) {
        return await wineDB.getByName(name);
    },

    getByWinemaker: async function (winemaker) {
        return await wineDB.getByWinemaker(winemaker);
    },

    add: async function (name, winemaker, crop, year, quantity, label) {
        return await wineDB.add(name, winemaker, crop, year, quantity, label);
    },

    deleteByName: async function (name) {
        return await wineDB.deleteByName(name);
    },

}
