window.onload = function() {
	var useranimal;
	var usernumber;
	var userteam;

	if (docCookies.hasItem("animal")) {
		loadUsername();
	}
	else {
		initUser();
	}

	//initFirebase();
};

function loadUsername() {
	useranimal = docCookies.getItem("animal");
	usernumber = docCookies.getItem("number");
	userteam = docCookies.getItem("team");
}

function initUser() {
	useranimal = generate_useranimal();
	usernumber = generate_usernumber();
	userteam = generate_userteam(usernumber);

	usernumber = usernumber.toString();

	docCookies.setItem("animal", useranimal);
	docCookies.setItem("number", usernumber);
	docCookies.setItem("team", userteam);

	//put user in database with default params
}

function generate_userteam(number) {
	if (number % 2 === 0) {
		return "red";
	}
	else {
		return "blue";
	}
}

function initFirebase() {

}