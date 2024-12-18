const {Pool} = require("pg");

const credentials = {
    port: 5432,
    host: "localhost",
    user: "postgres",
    database: "bim",
    password: "yourpassword"
}

const pool = new Pool( credentials );

module.exports = {
    pool : pool
};

