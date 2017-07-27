var connection = require("../config/connection.js");

//Helper function: 
function printQquestionMarks(num) {
	var arr = [];

	for (var i = 0; i < arr.length; i++) {
		arr.push("?");
	}
	return arr.toString();
};

function objToSql(ob) {
	var arr = [];
//iterates throyugh keys of the object
	for (var key in ob) {
		if (Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + " = " + ob[key]);
		}	
	}
	return arr.toString();
};


var orm = {
	selectAll: function(tableInput cd) {
		var queryString = "SELECT * FROM " + tableInput + ";";
    	connection.query(queryString, function(err, result) {
      		if (err) {
        	throw err;
      		}
      		cb(result);
   		 });
	};

	insertOne: function(table, col, val, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString + = printQquestionMarks(vals.length);
		queryString += ")" ;

		console.log(queryString);
		connection.query(queryString, vals, function(err, res) {
			if (err) throw err;
			cb(result);
		})
	}

	updateOne: function(table, objColVals, conditions, cd) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) throw err
			cd(result);
		});
	};

	delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }

};

module.exports = orm;

