

//The ORM model is to just retrieve data at a predetermined function that has a connection to mysql. Once that data is returned to the function
//from where it was call, that is where you would modify the data.
var connection = require('./connection');

var orm = {
	selectAll: function(tableName, callback){
		var querystring = "SELECT * FROM " + tableName + ";";
		connection.query(querystring, function(err, res){
			if(err){
				throw err;
			}
			callback(res);
		});
	},
	update: function(tableName, devouredValue, condition, callback){
		var querystring = "UPDATE " + tableName;
		querystring += " SET ";
		querystring += objToSql(devouredValue);
		querystring += " WHERE ";
		querystring += condition;

		connection.query(querystring, function(err, res){
			if(err)
				throw err;
			callback(res);
		});
	}, 
	create: function(tableName, burgerName, burgerData, callback){
		var querystring = "INSERT INTO " + tableName;

		querystring += " (";
		querystring += burgerName;
		querystring += ") ";
		querystring += "VALUES (";
		querystring += "?) ";

		connection.query(querystring, burgerData, function(err, res){
			if(err) throw err;

			callback(res);
		});
	}
};

// // Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];
  console.log("ob" + " " + ob);
  console.log("ob" + " " + ob.devoured);
  // console.log("key" + " " + key);
  for (var key in ob) {
  	console.log("key" + " " + key);
  	console.log("key2" + " " + ob.key);
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
    console.log("arr" + " " + arr)
  }

  return arr.toString();
}

module.exports = orm;

// Import MySQL connection.
// var connection = require("../config/connection.js");

// // Helper function for SQL syntax.
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function for SQL syntax.
// function objToSql(ob) {
//   var arr = [];
//   console.log("ob" + " " + ob.sleepy);
//   // console.log("key" + " " + key);
//   for (var key in ob) {
//     if (Object.hasOwnProperty.call(ob, key)) {
//       arr.push(key + "=" + ob[key]);
//     }
//     console.log("arr" + " " + arr)
//   }

//   return arr.toString();
// }

// // Object for all our SQL statement functions.
// var orm = {
//   all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   create: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },
//   // An example of objColVals would be {name: panther, sleepy: true}
//   update: function(table, objColVals, condition, cb) {
//     console.log("objColVals" + " " + objColVals.sleepy); 
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log("querystring" , queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   }
// };

// // Export the orm object for the model (cat.js).
// module.exports = orm;