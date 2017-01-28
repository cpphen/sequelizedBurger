var express = require('express');

var router = express.Router();
var theDatabase = require('../models');

router.get('/', function(req, res){
	res.redirect('/monster-burgers');
});

router.get('/monster-burgers', function(req, res){
	// burgers.allBurgers(function(data){
	// 	var finalReturnedData = {
	// 		theData: data
	// 	};
	// 	console.log(finalReturnedData);
	// 	res.render("index", finalReturnedData);
	// });
	theDatabase.burgers.findAll({}).then(function(data){
		var display = {
			theData: data
		};
		console.log("returned data ", display);
		res.render("index", display);
	});
});

router.put('/burgers/update/:id', function(req, res){
	// var id = req.params.id;

	// // var devour = req.body.devoured;
	// burgers.update({ devoured: req.body.devoured }, condition, function(){
	// 	res.redirect('/monster-burgers');
	// });
	theDatabase.burgers.update({
		devoured: req.body.devoured
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.redirect('/monster-burgers');
	});
});

router.post('/burgers/update/:id', function(req, res){
	// var id = req.params.id;

	// // var devour = req.body.devoured;
	// burgers.update({ devoured: req.body.devoured }, condition, function(){
	// 	res.redirect('/monster-burgers');
	// });
	theDatabase.burgers.update({
		devoured: req.body.devoured
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.redirect('/monster-burgers');
	});
});

router.post('/burgers/create', function(req, res){
	// burgers.make("burger_name", req.body.burger, function(){
	// 	res.redirect('/monster-burgers');
	// });

	theDatabase.burgers.create({
		burger_name: req.body.burger,
	}).then(function(data){
		res.redirect('/monster-burgers');
	});
});

module.exports = router;