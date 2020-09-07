const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        database: "burgerDB",
        user: "root",
        port: 3306,
        password: "takecare1"
    });
}


module.exports = connection;