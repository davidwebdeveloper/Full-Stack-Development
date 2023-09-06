// Write a function that takes an array of objects with a category property and returns a new array with only the unique categories. Use the filter and map methods to accomplish this.

const arr = [
  { name: "jilla", category: "flop" },
  { name: "Mersal", category: "Hit" },
  { name: "bigil", category: "flop" },
  {
    name: "Leo",
    category: "Super Hit",
  },
];

const newArray = arr
  .map(({ category }) => category)
  .filter((e, index, array) => {
    if (array.indexOf(e) == index) return e;
  });
console.log(newArray);
