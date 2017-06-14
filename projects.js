var bucketList = ['collect snes', 'learn javascript', 'learn ruby on rails'];

bucketList.pop();
console.log(bucketList);





//backwards looping array//
var vacationSpots = ['miami', 'san', 'dallas'];

for (var i = vacationSpots.length - 1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}




//for loop//
var myPlaces = ['Orlando', 'New York City', 'San Francisco'];

var friendPlaces = ['New York City', 'Boston', 'Dallas'];

for (var i = 0; i < myPlaces.length; i++) {
  for (var j = 0; j < friendPlaces.length; j++) {
    if (myPlaces[i] === friendPlaces[j]) {
      console.log('Match: ' + myPlaces[i]);     
    }
  }
}






var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('Found a Spade!');






//DOM manipulation//
//javascript//
document.getElementsByClassName('skillset');

//and Jquery//
$('.skillset');







function main() {
  $('.projects').hide();
  $('.projects-button').on('click', function() {
    $(this).toggleClass('active');
  });
}
$(document).ready(main);


//Javascript game //

// Check if the user is ready to play!
// Check if the user is ready to play!
confirm("Are you ready to play?");

var age = prompt("What's your age?");

if (age < 13) {
  console.log("you are allowed to play, although I assume no responsiblity");
}
else {
  console.log("Go ahead and play!!!");
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

var userAnswer = prompt("Do you want to race Bieber on stage?")

if (userAnswer === "yes") {
  console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}

else {
  console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

var feedback = prompt("please rate this game on a scale from 1 to 10");

if (feedback > 8) {
  console.log("Thank you! We should race at the next concert!");
}
else {
  console.log("I'll keep practicing coding and racing");
}




//javascript food prompt//
function foodDemand (food) {
    console.log("I want to eat" + " " + food);
}
foodDemand ("apples");

//orange cost//
function orangeCost(cost){
    var totalCost = cost * 5;
    console.log(totalCost);
}

orangeCost(5);


//local vs global scope //
var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

// Sleep Fuction //

var sleepCheck = function(numHours) {
 if (numHours >= 8) {
     return ("You're getting plenty of sleep! Maybe even too much!");
}
else {
    return ("Get some more shut eye!");
}
};

sleepCheck(4);

var list = ["bro", "girl", "dude", "dudette"];


