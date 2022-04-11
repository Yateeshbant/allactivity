import mysql from "mysql"
import conf from "../envconfig"
var con = mysql.createConnection({
    multipleStatements: true,
    host: conf._DB_HOST,
    user: conf._DB_USER,
    password: conf._DB_PASSWORD,
    database: conf._DB_DATABASE
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
export default con