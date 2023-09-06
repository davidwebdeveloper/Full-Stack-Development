// Write a function that takes an array of objects with a price property and returns a new array with only the objects that have a price less than a given amount. Use the filter method to accomplish this.
const item = [
  {
    name: "apple",
    price: 160,
  },
  {
    name: "orange",
    price: 100,
  },
  {
    name: "Grapes",
    price: 80,
  },

  {
    name: "Bannans",
    price: 60,
  },
];

const newArray = item
  .filter(({ price, name }) => price <= 100)
  .reduce((acc, { price }) => {
    acc = acc + price;
    return acc;
  }, 0);

console.log(newArray);
