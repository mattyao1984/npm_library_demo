var hearthstoneSkills = require('./hearthstone-skills.json');
var uniqueRandomArray = require('unique-random-array');
var getRandomItem = uniqueRandomArray(hearthstoneSkills);

var getRandomItems = function(number) {
  if(number === undefined) {
    return getRandomItem();
  } else {
    var randomSkills = [];
    for(var i = 0; i < number; i++) {
      randomSkills.push(getRandomItem());
    }

    return randomSkills;
  }
}

module.exports = {
  all: hearthstoneSkills,
  random: getRandomItems
}
