var hearthstoneSkills = require('./index');
var expect = require('chai').expect;

describe('hearthstoneSkills - all', function() {
  it('should return all data in an array of string', function() {
    expect(hearthstoneSkills.all).to.satisfy(isArrayOfStrings);

    function isArrayOfStrings(array) {
      return array.every(function(item) {
        return typeof item === 'string';
      });
    }
  });
});

describe('hearthstoneSkills - random', function() {
  it('should return a random string from the array', function() {
    var randomItem = hearthstoneSkills.random();
    expect(hearthstoneSkills.all).to.include(randomItem);
  });
})
