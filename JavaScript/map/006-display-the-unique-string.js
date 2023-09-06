const str = ["apple", "orange", "apple", "orange"];

str.filter((e, index, arr) => {
  console.log(arr.indexOf(e));
  console.log(`index = ${index}`);
  console.log("---");
  return arr.indexOf(e);
});
