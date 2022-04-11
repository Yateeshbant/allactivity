import db from './db/db'
const checktable = ` 
 CREATE TABLE activity (id INT NOT NULL AUTO_INCREMENT, startdate DATE NOT NULL, enddate DATE NOT NULL, description VARCHAR(255) NOT NULL, PRIMARY KEY(id))
 `

 db.query(checktable, function (err, result) {
    if (err) throw err;
    console.log("Database created", result);
});
