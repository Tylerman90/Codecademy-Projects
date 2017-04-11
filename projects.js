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