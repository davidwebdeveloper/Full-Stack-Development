// Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than a given amount. Use the filter method to accomplish this.

const arr = ["kalyanaRaman", "pravin", "david", "e"];
const lenghtV = 10;
const newArray = arr.filter((e) => {
  return e.length > lenghtV;
});
console.log(newArray);
