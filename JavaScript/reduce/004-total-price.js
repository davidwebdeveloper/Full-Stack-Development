const item = [
  { name: "shirt", quantity: 2, price: 350 },
  { name: "pant", quantity: 3, price: 500 },
];

const total = item.reduce((total, { quantity, price }) => {
  return total + quantity * price;
}, 0);
console.log(total);
