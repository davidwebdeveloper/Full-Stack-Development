const grocery = [
  { name: "soap", price: 10 },
  { name: "paste", price: 20 },
  { name: "surf", price: 10 },
];
const total = grocery.reduce((price, element) => {
  return price + element.price;
}, 0);

console.log(total);
