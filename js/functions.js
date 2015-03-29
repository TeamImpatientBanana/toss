function loadUsername() {
	useranimal = docCookies.getItem("animal");
	usernumber = docCookies.getItem("number");
	userteam = docCookies.getItem("team");

	console.log("loading username");
}

function initUser(scoreListRef) {
	console.log("ititializing user");

	useranimal = generate_useranimal();
	usernumber = generate_usernumber();
	userteam = generate_userteam(usernumber);

	usernumber = usernumber.toString();

	cachedCanToss = true;
	cachedPointCount = 0;
	cachedVoteCount = 0;
	cachedVotesAvaliable = 0;

	//put user in database with default params
	var userScoreRef = scoreListRef.child(userteam).child(useranimal+usernumber);

	//error if it Firebase sync doesn't work
	var onComplete = function(error) {
	  if (error) {
	    console.log('Synchronization failed');
	    location.reload();
	  } else {
	    console.log('Synchronization succeeded');

	    docCookies.setItem("animal", useranimal);
	    docCookies.setItem("number", usernumber);
	    docCookies.setItem("team", userteam);
	  }
	};

	// Use setWithPriority to put the name / score in Firebase, and set the priority to be the score.
	userScoreRef.set({
		canToss:cachedCanToss,
		animal:useranimal,
		number:usernumber,
		team:userteam,
		pointCount:cachedPointCount,
		voteCount:cachedVoteCount,
		votesAvaliable:cachedVotesAvaliable
	}, onComplete);
}

	function generate_useranimal() {
		var animal = "herp";
		return animal;
	}

	function generate_usernumber() {
		var number = getRandomInt(1000, 9999);
		return number;
	}

		//from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		}

	function generate_userteam(number) {
		if (number % 2 === 0) {
			console.log("number");
			return "red";
		}
		else {
			console.log("number");
			return "blue";
		}
	}

