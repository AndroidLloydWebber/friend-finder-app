//here I load dependencies from our npm install and require them to be used


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// now I can set up the variable for my express server property

var app = express();

// Set up port variable as a listener. Ports can be open door ways to control data traffic in anyway you wish
var PORT = process.env.PORT || 8080;

//use the app variable with express to set up data parsing with bodyParser which is a middleware package item in the npm express package. this also allows use to structure the data into the JSON format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ROUTER

// now I require the apiRoutes and htmlRoutes, which are two different ways the server can route requested information from the user. the api route will give the user JSON parsing if requested and the html route will allow the user to see the content on a web page.

app.use('/static', express.static(path.join(__dirname, 'app/public/home.html')))
app.use('/static', express.static(path.join(__dirname, 'app/public/survey.html')))


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// LISTENER
// the code app.listen does exactly what is written. It tells the PORT to listen for request for data. I have console logged the message "App listening on Port..." to alert me in the command line when the server's listener starts correctly and is ready to work.
//console.log("wrong");

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
