const findTheOldest = (people) => {
  let peopleAges = []; 
  people.map((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    };
    peopleAges.push(person.yearOfDeath - person.yearOfBirth);
  });
  let oldestPerson = peopleAges.indexOf(Math.max(...peopleAges));
  return people[oldestPerson];
};

// Do not edit below this line
module.exports = findTheOldest;
