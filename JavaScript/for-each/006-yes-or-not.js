// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

const a = "hihow y";
const b = a.split("");
let c = false;
b.forEach((e) => {
  if (e === "y") {
    c = true;
    return;
  }
});

if (c == true) {
  console.log("Yes");
} else {
  console.log("No");
}
