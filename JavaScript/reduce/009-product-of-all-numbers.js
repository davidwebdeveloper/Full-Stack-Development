// Write a function that takes an array of numbers and returns the product of all the numbers. Use the reduce method to accomplish this

const a = [30, 50, 20];
const product = a.reduce((total, num) => total * num);
console.log(product);
