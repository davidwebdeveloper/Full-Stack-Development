const product = [
  {
    name: "chocolate",
    category: "sweet",
  },
  { name: "Bisucts", category: "Morning snacks" },
  {
    name: "Idly",
    category: "breakFirst",
  },
];

const b = product.map((e) => {
  const newObj = {};
  newObj[e.category] = e;
  return newObj;
});
console.log(b);
