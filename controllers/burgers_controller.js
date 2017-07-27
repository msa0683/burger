var burgers = require("../models/burgers.js");

var express = require("express");
var app = express();

var router = express.Router();


router.get("/", function(req,res) {
	burgers.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});















module.exports = router;