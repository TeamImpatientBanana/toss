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