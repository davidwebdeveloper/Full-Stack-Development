// Get the sum of two arrays…actually the sum of all their elements.P.S. Each array includes only integer numbers. Output is a number too.

const a = [10, 12, 20];
const b = [12, 20, 10];
let sum = 0;
a.forEach((e) => {
  sum = sum + e;
  return sum;
});

const sum1 = b.forEach((e) => {
  sum = sum + e;
  return sum;
});

console.log(sum1);
