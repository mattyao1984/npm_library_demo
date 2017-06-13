import hearthstoneSkills from './hearthstone-skills.json';
import uniqueRandomArray from 'unique-random-array';

let getRandomItem = uniqueRandomArray(hearthstoneSkills);

let getRandomItems = (number) => {
  if(number === undefined) {
    return getRandomItem();
  } else {
    let randomSkills = [];
    for(let i = 0; i < number; i++) {
      randomSkills.push(getRandomItem());
    }

    return randomSkills;
  }
}

export default {
  all: hearthstoneSkills,
  random: getRandomItems
}
