// module imports
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

// pool connection mysql
const db = mysql.createPool({
    port: process.env.PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10,
    multipleStatements: true
});

module.exports = db;

