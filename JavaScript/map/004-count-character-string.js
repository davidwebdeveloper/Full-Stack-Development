const str = "david";
const newStr = str.split("");
const newObj = {};
console.log(newStr);
newStr.map((e) => (newObj[e] = newObj[e] + 1 || 1));

console.log(newObj);
