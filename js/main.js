var useranimal;
var usernumber;
var userteam;
var cachedCanToss;
var cachedPointCount;
var cachedVoteCount;
var cachedVotesAvaliable;

var blueTotal;
var redTotal;

var LEADERBOARD_SIZE = 10;

// Create our Firebase reference
var scoreListRef = new Firebase('https://glaring-inferno-8615.firebaseio.com/');
var scoreListViewRed = scoreListRef.child("red").limitToLast(LEADERBOARD_SIZE);
var scoreListViewBlue = scoreListRef.child("blue").limitToLast(LEADERBOARD_SIZE);

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
scoreListViewRed.on('child_added', function (newScoreSnapshot, prevScoreName) {
	console.log("child_added");
	handleScoreAdded(newScoreSnapshot, prevScoreName);
});
scoreListViewBlue.on('child_added', function (newScoreSnapshot, prevScoreName) {
	console.log("child_added");
	handleScoreAdded(newScoreSnapshot, prevScoreName);
});

// Add a callback to handle when a score changes or moves positions.
var changedCallback = function (scoreSnapshot, prevScoreName) {
  handleScoreRemoved(scoreSnapshot);
  handleScoreAdded(scoreSnapshot, prevScoreName);
};

scoreListViewRed.on('child_moved', changedCallback);
scoreListViewRed.on('child_changed', changedCallback);

scoreListViewBlue.on('child_moved', changedCallback);
scoreListViewBlue.on('child_changed', changedCallback);