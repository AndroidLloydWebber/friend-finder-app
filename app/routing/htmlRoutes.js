var path = require("path");

// to get the right file path for html I have to require the path package in the htmlRoutes. js code

//module.export equaling a function will export the function(app) which contains a GET Request with a html path. This allows the user to see the page content in html. this also contains a function within a function

module.exports = function( app ) {

app.get("/survey",  function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
});

//no route match will default to home page

app.use( function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
});
}