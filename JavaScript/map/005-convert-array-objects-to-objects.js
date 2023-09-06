const newObj = {};
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

product.map((e) => (newObj[e.category] = e));
console.log(newObj);
