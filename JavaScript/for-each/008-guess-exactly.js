const n = "1234";
let inp;
let i;

for (i = 0; i < n.length; i++) {
  inp = prompt("Enter your input");
  if (inp == n) {
    alert("your password is correct");
    break;
  } else {
    alert("your password is wrong");
  }
}

if (i == 4) {
  alert("your chances are over");
}
