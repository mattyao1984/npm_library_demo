import hearthstoneSkills from './index';
import { expect } from 'chai';

describe('hearthstoneSkills - all', () => {
  it('should return all data in an array of string', () => {
    let isArrayOfStrings = (array) => {
      return array.every((item) => {
        return typeof item === 'string';
      });
    }

    expect(hearthstoneSkills.all).to.satisfy(isArrayOfStrings);
  });
});

describe('hearthstoneSkills - random', () => {
  it('should return a random string from the array', () => {
    let randomItem = hearthstoneSkills.random();
    expect(hearthstoneSkills.all).to.include(randomItem);
  });

  it('should return an array of random items if passing a number', () => {
    let randomItems = hearthstoneSkills.random(4);
    expect(randomItems).to.have.length(4);
    randomItems.every((item) => {
      expect(hearthstoneSkills.all).to.include(item);
    });
  });
})
