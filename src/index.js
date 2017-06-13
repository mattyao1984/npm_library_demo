var hearthstoneSkills = require('./hearthstone-skills.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: hearthstoneSkills,
  random: uniqueRandomArray(hearthstoneSkills)
}
