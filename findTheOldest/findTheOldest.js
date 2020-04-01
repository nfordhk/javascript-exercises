/*const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },                     
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]*/

let findTheOldest = function(array) {
  let age = 0;
  return array.reduce(function(acc, people) {
    if (people.yearOfDeath - people.yearOfBirth > age) {
      acc = people
      age = people.yearOfDeath - people.yearOfBirth
    }
    return acc
  }, {})
}

module.exports = findTheOldest
//console.log (findTheOldest(people))
