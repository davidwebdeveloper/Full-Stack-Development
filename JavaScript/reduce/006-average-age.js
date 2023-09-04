// Write a function that takes an array of objects with a name and age property and returns the average age of all the objects. Use the reduce method to accomplish this.
const person = [
  { name: "david", age: 21 },
  { name: "vetrivel", age: 73 },
  { name: "abdul", age: 92 },
];
const avg = person.reduce((avg, { age }) => {
  return avg + age / person.length;
}, 0);
console.log(avg);
