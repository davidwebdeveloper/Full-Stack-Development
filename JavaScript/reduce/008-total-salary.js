// Write a function that takes an array of objects with a name and salary property and returns the total salary of all the employees. Use the reduce method to accomplish this.

const employee = [
  { name: "david", salary: 78000 },
  { name: "vetrivel", salary: 60000 },
  { name: "pravin", salary: 30000 },
];
const total = employee.reduce((total, { salary }) => total + salary, 0);
console.log(total);
