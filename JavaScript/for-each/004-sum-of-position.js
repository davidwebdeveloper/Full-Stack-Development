// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

const a = [10, 1, 18, 15];
const b = [20, 20, 14, 38];
const c = [];
for (let i = 0; i < a.length; i++) {
  c[i] = a[i] + b[i];
}
console.log(c);
