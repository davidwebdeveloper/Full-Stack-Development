const str = ["apple", "orange", "apple", "orange", "banana"];

const newStr = str.filter((e, index, arr) => {
  return arr.indexOf(e) == index;
});

console.log(newStr);
