var burgers = require("../models/burgers.js");

var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
	burgers.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burgers", function(req, res) {
	burgers.insertOne(
		[ "burger_name" ], 
		[ req.body.burger_name], 
		function() {
			res.redirect("/");
		}
	);
});

router.put("burgers/:id", function(req, res) {
	var condition= "id =" + req.params.id;
	console.log("condition", condition);

	burgers.update({
	burger_name: req.body.burger_name
	}, condition, function() {
		res.redirect("/");
	});
});

router.delete("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	burgers.delete(condition, function() {
		res.redirect("/");
	});
});

module.exports = router; 
