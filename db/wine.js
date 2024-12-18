const {pool} = require("./db");

module.exports = {

    getAll: async function () {
        let wines = null;

        try {
            const results = await pool.query("select * from wine;");
            if (results.rows.length > 0) wines = results.rows;
        } catch (e) {
            console.error(e);
        }

        return wines;
    },

    getByName: async function (name) {
        let wine = null;

        try {
            const results = await pool.query("select * from wine where name = $1;", [name]);
            if (results.rows.length > 0) wine = results.rows[0];
        } catch (e) {
            console.error(e);
        }

        return wine;
    },

    getByWinemaker: async function (name) {
        let wine = null;

        try {
            const results = await pool.query("select * from wine where winemaker = $1;", [name]);
            if (results.rows.length > 0) wine = results.rows[0];
        } catch (e) {
            console.error(e);
        }

        return wine;
    },

    add: async function (name, winemaker, crop, year, quantity, label) {
        let success = false;

        try {
            await pool.query("insert into wine (id, name, winemaker, crop, bottling_year, quantity, label) values (gen_random_uuid(),$1, $2, $3, $4, $5, $6);", [name, winemaker, crop, year, quantity, label]);
            success = true;
        } catch (e) {
            console.error(e);
        }

        return success;
    },

    deleteByName: async function (name) {
        let success = false;

        try {
            const results = await pool.query("delete from wine where name = $1;", [name]);
            if (results.rowCount > 0) success = true;
        } catch (e) {
            console.error(e);
        }

        return success;
    },

};