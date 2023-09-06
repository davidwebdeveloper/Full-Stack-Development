const word = ["david", "vetrivel", "vetrivel"];
let myArr = {};
word.map((e) => {
  myArr[e] = myArr[e] + 1 || 1;
});

console.log(myArr);
