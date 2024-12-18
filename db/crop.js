const {pool} = require("./db");

module.exports = {

    getAll: async function () {
        let crops = null;

        try {
            const results = await pool.query("select * from crop;");
            if (results.rows.length > 0) crops = results.rows;
        } catch (e) {
            console.error(e);
        }

        return crops;
    },

    getByGrape: async function (grape) {
        let crops = null;

        try {
            const results = await pool.query("select * from crop where grape = $1;", [grape]);
            if (results.rows.length > 0) crops = results.rows;
        } catch (e) {
            console.error(e);
        }

        return crops;
    },

    getByID: async function (id) {
        let crop = null;

        try {
            const results = await pool.query("select * from crop where id = $1;", [id]);
            if (results.rows.length > 0) crop = results.rows[0];
        } catch (e) {
            console.error(e);
        }

        return crop;
    },

    add: async function (id, grape, picking_year, quantity) {
        let success = false;

        try {
            await pool.query("insert into crop (id, grape, picking_year, quantity) values ( $1, $2, $3, $4 );", [id, grape, picking_year, quantity]);
            success = true;
        } catch (e) {
            console.error(e);
        }

        return success;
    },

    deleteByID: async function (id) {
        let success = false;

        try {
            const results = await pool.query("delete from crop where id = $1;", [id]);
            if (results.rowCount > 0) success = true;
        } catch (e) {
            console.error(e);
        }

        return success;
    },

};