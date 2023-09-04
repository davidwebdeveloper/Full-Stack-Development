// Write a function that takes an array of strings and returns the longest string in the array. Use the reduce method to accomplish this.

const arr = [
  "david",
  "pravin abdul kalam",
  "vetri maran",
  "santhosh",
  "Bharathi",
];
const n = arr.reduce((acc, str) => {
  if (str.length > acc.length) {
    acc = str;
  }
  return acc;
});

console.log(n);
