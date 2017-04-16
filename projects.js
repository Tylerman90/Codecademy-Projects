var bucketList = ['collect all snes', 'learn javascript', 'learn ruby'];

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









// ruby practice - puts stands for print string and gice your string it's own line. Print prints the input as is.//

print "What's your first name?"
first_name = gets.chomp
puts "Your first name is #{first_name}"

print "What's your last name?"
last_name = gets.chomp
puts "Your last name is #{last_name}"

print "What city were you born in?"
city = gets.chomp
puts "You were born in #{city}"

print "What state were your born in?"
state = gets.chomp
puts "You were born in #{state}"

 
