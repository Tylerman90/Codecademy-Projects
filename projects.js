var bucketList = ['collect snes', 'learn javascript', 'learn ruby'];

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
confirm("Are you ready to play?!?");

var age = prompt("What's your age?");

if (age < 13) {
    console.log("you are allowed to play, although I assume no responsiblity");
}
    else {
    console.log("Go ahead and play!!!");
}








// ruby practice - puts stands for print string and gice your string it's own line. Print prints the input as is.//

// print "What's your first name?"
// first_name = gets.chomp
// first_name2 = first_name.capitalize
// first_name.capitalize!

// print "What's your last name?"
// last_name = gets.chomp
// last_name2 = first_name.capitalize
// last_name.capitalize!

// print "What city were you born in?"
// city = gets.chomp
// city2 = first_name.capitalize
// city.capitalize!

// print "What state were your born in?"
// state = gets.chomp
// state2 = first_name.capitalize
// state.upcase!


// // more ruby //
// print "Integer please: "
// user_num = Integer(gets.chomp)

// if user_num < 0
//   puts "You picked a negative integer!"
// elsif user_num > 0
//   puts "You picked a positive integer!"
// else
//   puts "You picked zero!"
// end

//the end//

 
