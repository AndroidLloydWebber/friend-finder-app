//load data 
//link routes to data sources like I was taught in class
//below variable hold arrays full of "friend" information

var friendArray = require("../data/friends.js");


//Routing

//API GET Requests
//What happens when the user visits the page?
//Because this is my API, users will visit a link and be shown a JSON table of the data to be used for their own purposes. 

module.exports = function(app) {
app.get("/api/friends", function (req, res) {
    res.json(friendArray);
});

// Now we need to deal with when users submit the friend form.
// We need this data to be submitted to the server.
// POST Request for the API will handle this process.
// After the user presses submit I need a JSON object to be pushed into my js array.
// The server then can save it into my friendArray.
// Understanding this part is very important for me personally.

app.post('/api/friends', function(req, res){

	// Note the code here. Our "server" will respond to a user's survey result
	// Then compare those results against every user in the database.
	// It will then calculate the difference between each of the numbers and the user's numbers.
	// It will then choose the user with the least differences as the "best friend match."
	// In the case of multiple users with the same result it will choose the first match.
	// After the test, it will push the user to the database. 

	// We will use this object to hold the "best match". We will constantly update it as we 
	// loop through all of the options 
	var bestMatch = {
		name: "",
		photo: "",
		friendDifference: 1000
	};

	// Here we take the result of the user's survey POST and parse it.
	var userData 	= req.body;
	var userName 	= userData.name;
	var userPhoto 	= userData.photo;
	var userScores 	= userData.scores;

	// This variable will calculate the difference between the user's scores and the scores of
	// each user in the database
	var totalDifference = 0;

	// Here we loop through all the friend possibilities in the database. 
	for  (var i=0; i< friendArray.length; i++) {

		console.log(friendArray[i].name);
		totalDifference = 0;

		// We then loop through all the scores of each friend
		for (var j=0; j< friendArray[i].scores[j]; j++){

			// We calculate the difference between the scores and sum them into the totalDifference
			totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendArray[i].scores[j]));

			// If the sum of differences is less then the differences of the current "best match"
			if (totalDifference <= bestMatch.friendDifference){

				// Reset the bestMatch to be the new friend. 
				bestMatch.name = friendArray[i].name;
				bestMatch.photo = friendArray[i].photo;
				bestMatch.friendDifference = totalDifference;
			}
		}
	}

	// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
	// the database will always return that the user is the user's best friend).
	friendArray.push(userData);

	// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
	res.json(bestMatch);

});

}