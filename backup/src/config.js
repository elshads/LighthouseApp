const config = require("../config.json");
const pgp = require("pg-promise")();
const db = pgp(config.connection);


module.exports = { db };