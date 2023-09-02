//

// const marksDavid = [95, 81, 90, 96, 97];
// const marksVetri = [99, 98, 95, 73, 68];
// const a = marks.reduce((total, num) => total + num, 1);
// console.log(a);

// const b = function (total, num) {
//   return total + num;
// };

// const value = marksDavid.reduce(b, 0) + marksVetri.reduce(b, 1);
// console.log(value);

// Reduce using Arrow function

const a = [10, 20, 30, 40];
const total = a.reduce((acc, value) => {
  console.log(`Accumulator value is ${acc}`);
  console.log(`Value is = ${value}`);
  return acc + value;
});
console.log(`total value is = ${total}`);

console.log("-----------------");

// Reduce using anonymus function

const sum = function (acc, value) {
  return acc + value;
};

console.log(a.reduce(sum, 0));

// Reduce using
