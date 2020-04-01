let data = [{
    name: ' Henry',
    age: 20,
    job: 'store clerk'
  },
  {
    name: 'Juliet',
    age: 18,
    job: 'student'
  },
  {
    name: 'Luna',
    age: 47,
    job: 'CEO'
  }
];
var max = 0;
console.log(data.reduce((acc, a) => {
  if (a.age > max) {
    acc = a.name
    max = a.age;
  }
  return acc;
}, ""))