
var orm = require('../config/orm');

var burgers = {
	allBurgers: function(callback){
		orm.selectAll("burgers", function(data){
			callback(data);
		});
	},
	update: function(devouredValue, condition, callback){
		orm.update("burgers", devouredValue, condition, function(res){
			callback(res);
		});
	},
	make: function(burgerName, burgerData, callback){
		orm.create("burgers", burgerName, burgerData, function(res){
			callback(res);
		});
	}
}

module.exports = burgers;

// var cat = {
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = cat;