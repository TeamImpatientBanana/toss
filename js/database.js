// Helper function that takes a new score snapshot and adds an appropriate row to our leaderboard table.
function handleScoreAdded(scoreSnapshot, prevScoreName) {
	console.log("handleScoreAdded");


	if (scoreSnapshot.val().team === "blue") {
		console.log("add " + scoreSnapshot.val().animal + scoreSnapshot.val().number + " to blue team");

		var newScoreRow = $("<tr/>");
		newScoreRow.append($("<td/>").text(scoreSnapshot.val().voteCount));
		newScoreRow.append($("<td/>").text(scoreSnapshot.val().animal + scoreSnapshot.val().number));
		newScoreRow.append($("<td/>").text(scoreSnapshot.val().pointCount));

		// Store a reference to the table row so we can get it again later.
		htmlForPath[scoreSnapshot.key()] = newScoreRow;

		// Insert the new score in the appropriate place in the table.

		$("#blueTeamTable").append(newScoreRow);

		/*
		if (prevScoreName === null) {
			$("#blueTeamTable").append(newScoreRow);
		}
		else {
			var lowerScoreRow = htmlForPath[prevScoreName];
			lowerScoreRow.before(newScoreRow);
		}
		*/
	}
	if (scoreSnapshot.val().team === "red") {
		console.log("add " + scoreSnapshot.val().animal + scoreSnapshot.val().number + " to red team");

		var newScoreRow = $("<tr/>");
		newScoreRow.append($("<td/>").text(scoreSnapshot.val().voteCount));
		newScoreRow.append($("<td/>").text(scoreSnapshot.val().animal + scoreSnapshot.val().number));
		newScoreRow.append($("<td/>").text(scoreSnapshot.val().pointCount));

		// Store a reference to the table row so we can get it again later.
		htmlForPath[scoreSnapshot.key()] = newScoreRow;

		// Insert the new score in the appropriate place in the table.
		$("#redTeamTable").append(newScoreRow);

		/*
		if (prevScoreName === null) {
			$("#redTeamTable").append(newScoreRow);
		}
		else {
			var lowerScoreRow = htmlForPath[prevScoreName];
			lowerScoreRow.before(newScoreRow);
		}
		*/
	}

	if (scoreSnapshot.val().animal == useranimal && scoreSnapshot.val().number == usernumber) {
		//Pull data for...
		console.log("Pull my user data");
		cachedCanToss = scoreSnapshot.val().canToss;
		cachedPointCount = scoreSnapshot.val().pointCount;
		cachedVoteCount = scoreSnapshot.val().voteCount;
		cachedVotesAvaliable = scoreSnapshot.val().votesAvaliable;
	}

/*
	// Store a reference to the table row so we can get it again later.
	htmlForPath[scoreSnapshot.key()] = newScoreRow;

	// Insert the new score in the appropriate place in the table.
	if (prevScoreName === null) {
		$("#leaderboardTable").append(newScoreRow);
	}
	else {
		var lowerScoreRow = htmlForPath[prevScoreName];
		lowerScoreRow.before(newScoreRow);
	}
*/
}

// Helper function to handle a score object being removed; just removes the corresponding table row.
function handleScoreRemoved(scoreSnapshot) {
  var removedScoreRow = htmlForPath[scoreSnapshot.key()];
  removedScoreRow.remove();
  delete htmlForPath[scoreSnapshot.key()];
}
