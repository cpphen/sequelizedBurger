
var express = require('express');
var burgers = require('../models/burger');

var router = express.Router();

router.get('/', function(req, res){
	res.redirect('/monster-burgers');
});

router.get('/monster-burgers', function(req, res){
	burgers.allBurgers(function(data){
		var finalReturnedData = {
			theData: data
		};
		console.log(finalReturnedData);
		res.render("index", finalReturnedData);
	});
});

router.put('/burgers/update/:id', function(req, res){
	var condition = "id = " + req.params.id;

	// var devour = req.body.devoured;
	burgers.update({ devoured: req.body.devoured }, condition, function(){
		res.redirect('/monster-burgers');
	});
});

router.post('/burgers/create', function(req, res){
	burgers.make("burger_name", req.body.burger, function(){
		res.redirect('/monster-burgers');
	});
});

module.exports = router;


// var express = require("express");

// var router = express.Router();

// // Import the model (cat.js) to use its database functions.
// var cat = require("../models/cat.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   res.redirect("/cats");
// });

// router.get("/cats", function(req, res) {
//   cat.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     console.log("hbsObject" + " " + hbsObject.cats);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/cats/create", function(req, res) {
// 	console.log("req body " + req.body)
// 	console.log("req body name" + req.body.name)
// 	console.log("req body sleep" + req.body.sleepy)
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function() {
//     res.redirect("/cats");
//   });
// });

// router.put("/cats/update/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("req params" + " " + req.params)
//   console.log("req params id" + " " + req.params.id)

//   console.log("condition", condition);
//   console.log("sleepy" + " " + req.body.sleepy)
//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function() {
//     res.redirect("/cats");
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;