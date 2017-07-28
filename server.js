var mysql = require("mysql");
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var methodOverride = require('method-override')

var express = require("express");
var app = express();

app.use(methodOverride('_method'))


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});