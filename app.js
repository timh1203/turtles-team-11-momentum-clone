var express		= require("express");
var	app 		= express();
var moment = require("moment");
var path = require('path');

var theTime = moment().format('LLLL');
app.use(express.static('public'));
app.set("view engine", "ejs");


//Homepage
app.get("/", function(req, res){
res.render("index", {theTime: theTime});
});

//Listener for servers
app.listen(3000, function(){
	console.log("The server has started!");
});

// //Listener for servers heroku & etc
// app.listen(process.env.PORT,process.env.IP, function(){
// 	console.log("The YelpCamp server has started!");
// });
