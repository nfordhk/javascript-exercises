const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
      //age: 28,
    },                     
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011,
      //age: 49,
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941,
      //age: 30,
    },
  ]
//using reduce function
const findTheOldest = function(array) {
  return array.reduce((acc, currentPerson) => {
  })
}

findTheOldest(people)

module.exports = findTheOldest

//TEST CONFIG
//find the oldest , returns age only 
/*
let findTheOldest = function(people) {
    high = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath - people[i].yearOfBirth > high)
         high = people[i].yearOfDeath - people[i].yearOfBirth;
    }
    console.log ('Oldest Person is:',high)
}
*/