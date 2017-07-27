var mysql = require("mysql");

var connection = mysql.createConnection( {

	host: "localhost",
	port: 3306,
	username: "root",
	password: "mariam",
	database: "burgers_db"
});

connection.connect(function(err) {
	if(err) throw err
	console.log("connected as id " + connection.threadId);
});

//Export connection to orm
module.exports = connection;