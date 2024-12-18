const labelDB = require("../db/label");

module.exports = {

    getAll: async function () {
        return await labelDB.getAll();
    },

    add: async function (id, designer, picture, body) {
        return await labelDB.add(id, designer, picture, body);
    },

}