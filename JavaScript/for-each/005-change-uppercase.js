// Given a string change the every second letter to an uppercase ‘Z’.
const a = "david";
let b = a.split("");
for (let i = 1; i < a.length; i = i + 2) {
  b[i] = "Z";
}
b = b.join("");
console.log(b);
