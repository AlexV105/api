const mysqsl = require ("mysql");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 

//OPEN MY SQL CONNECTION
db.connect(error => {
    if (error) throw error;
    console.log("DB connected");
});

module.exports = db;