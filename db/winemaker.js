const {pool} = require("./db");

module.exports = {

    getAll: async function () {
        let winemakers = null;

        try {
            const results = await pool.query("select * from winemaker;");
            if (results.rows.length > 0) winemakers = results.rows;
        } catch (e) {
            console.error(e);
        }

        return winemakers;
    },

    getByLocation: async function (location) {
        let winemakers = null;

        try {
            const results = await pool.query("select * from winemaker where location = $1;", [location]);
            if (results.rows.length > 0) winemakers = results.rows;
        } catch (e) {
            console.error(e);
        }

        return winemakers;
    },

    getByName: async function (name) {
        let winemaker = null;

        try {
            const results = await pool.query("select * from winemaker where name = $1;", [name]);
            if (results.rows.length > 0) winemaker = results.rows[0];
        } catch (e) {
            console.error(e);
        }

        return winemaker;
    },
    
    add: async function (name, location) {
        let success = false;

        try {
            await pool.query("insert into winemaker (id, name, location) values (gen_random_uuid(),$1, $2);", [name, location]);
            success = true;
        } catch (e) {
            console.error(e);
        }

        return success;
    },

    deleteByName: async function (name) {
        let success = false;

        try {
            const results = await pool.query("delete from winemaker where name = $1;", [name]);
            if (results.rowCount > 0) success = true;
        } catch (e) {
            console.error(e);
        }

        return success;
    },

};