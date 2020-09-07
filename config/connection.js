const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "	d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        database: "	fmapx6sl3ato0k19",
        user: "	g9f6659cwx6h1r8y",
        port: 3306,
        password: "	rcs9n5g85q4uef9g"
    });
}


module.exports = connection;