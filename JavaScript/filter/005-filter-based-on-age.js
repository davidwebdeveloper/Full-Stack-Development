const person = [
  {
    name: "david",
    age: 21,
  },
  { name: "VetriVel", age: 25 },
  { name: "Santhosh", age: 45 },
  { name: "Bharathi", age: 22 },
];

const newArray = person.filter(({ age }, index, array) => age >= 25);
console.log(newArray);
