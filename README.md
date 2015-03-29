toss
=====

When you first load Toss in your browser, you are assigned onto the Blue or Red team, and given the opportunity to do you first "Toss", which tosses a "pebble" into your team's pile, giving you (and your team) a point, and gives you five votes to spend on your team.

In order to toss again you need to spend "votes" given to you by your team. Your future tosses have a cost equal to the amount of points you've earned for your team.

The goal is to facilitate teamwork between players of the same team as they try to accomplish a faster "toss and vote" loop between their team mates, helping each other beat the other team.

Toss uses Bootstrap for the front end and Firebase for the backend.

##To use

We curently are not hosting a round of toss as the game isn't done yet.

##Status

Not done! We haven't finished this project yet, but keep an eye on it!

##To install on your own server

Toss only requires a browser and a Firebase server. To make your own instance of toss, first make a new Firebase, and copy the URL of the firebase into the main.js file into "var scoreListRef = new Firebase('YOUR URL HERE');". You are then ready to upload the app onto your web server. As of right now you do not need to adjust the security settings in Firebase for toss to work.
