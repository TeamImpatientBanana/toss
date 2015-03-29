var useranimal;
var usernumber;
var userteam;
var cachedCanToss;
var cachedPointCount;
var cachedVoteCount;
var cachedVotesAvaliable;

var LEADERBOARD_SIZE = 10;

// Create our Firebase reference
var scoreListRef = new Firebase('https://glaring-inferno-8615.firebaseio.com/');
var scoreListView = scoreListRef.limitToLast(LEADERBOARD_SIZE);

// Keep a mapping of firebase locations to HTML elements, so we can move / remove elements as necessary.
var htmlForPath = {};

window.onload = function() {
	if (docCookies.hasItem("animal")) {
		loadUsername();
	}
	else {
		initUser(scoreListRef);
	}
};

// Add a callback to handle when a new score is added.
scoreListView.on('child_added', function (newScoreSnapshot, prevScoreName) {
	console.log("child_added");
	handleScoreAdded(newScoreSnapshot, prevScoreName);
});