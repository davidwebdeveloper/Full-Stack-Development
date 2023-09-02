// // First program of javaScript
// console.log("hello world");

// // 1. Write a function that takes an array of numbers and returns a new array with each number squared.
// // Use the Map object to accomplish this.

// const a = [4, 5, 6];
// const square = a.map((e) => e * e);
// console.log(square);

// // Write a function that takes an array of objects with a name property and returns a new array of strings with the name of each object capitalized.
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
s = a.filter((e) => {
  if (e % 2 == 0) {
    return e;
  }
});
console.log(s);

const m = a.map((e) => {
  if (e % 2 == 0) {
    return e;
  }
});
console.log(m);
