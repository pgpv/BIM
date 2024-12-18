const {pool} = require("./db");

module.exports = {

    getAll: async function () {
        let labels = null;

        try {
            const results = await pool.query("select * from label;");
            if (results.rows.length > 0) labels = results.rows;
        } catch (e) {
            console.error(e);
        }

        return labels;
    },

    add: async function (id, designer, picture, body) {
        let success = false;

        try {
            await pool.query("insert into label (id, designer, picture, body) values ($1, $2, $3, $4);", [id, designer, picture, body]);
            success = true;
        } catch (e) {
            console.error(e);
        }

        return success;
    },

};