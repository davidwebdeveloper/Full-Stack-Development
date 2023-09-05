"use:strict";

// const transactions = [200, 300, -400, -200, 500, -300, -300, 600, -100];

// // For of loop

// for (const transaction of transactions) {
//   if (transaction > 0) {
//     console.log(`Deposite is : ${transaction}`);
//   } else {
//     console.log(`Widthdrawel is : ${Math.abs(transaction)}`);
//   }
// }

// // For each loop
// console.log(`-----For each loop------`);

// transactions.forEach(function (transaction) {
//   if (transaction > 0) {
//     console.log(`Deposite is : ${transaction}`);
//   } else {
//     console.log(`Widthdrawel is : ${Math.abs(transaction)}`);
//   }
// });

// const calTip = function (bill) {
//   let tip;
//   if (bill >= 0 && bill <= 500) {
//     tip = bill * (15 / 100);
//     return tip;
//   } else {
//     tip = bill * (20 / 100);
//     return tip;
//   }
// };

// const bills = [125, 555, 44];
// for (const bill of bills) {
//   const tip = calTip(bill);
//   const total = bill + tip;
//   console.log(`Tip is = ${tip}`);
//   console.log(`Total bill is = ${total}`);
// }

// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// // const total = tips[0] + tips[1] + tips[2] + bills[0] + bills[1] + bills[2];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips);
// console.log(total);

// const myBrothers = ["Ranjan", "Ajith", "Paul"];
// console.log(myBrothers.push("soosai"));
// console.log(myBrothers);
// console.log(myBrothers.unshift("david"));
// console.log(myBrothers);

// console.log(myBrothers.shift());
// console.log(myBrothers.pop());
// console.log(myBrothers);

// Destructuring

// const brothers = ["david", "ajith", "ranjan", "soosai", "paul"];
// const [a, b, c, d, e] = brothers;
// console.log(a, b, c, d, e);

// const hotel = {
//   name: "krishna unavagam",
//   category: ["veg", "non-veg", "vegan"],
//   maindish: ["parota", "sapathi", "dosa"],
//   sidedish: ["kalakki", "chicken65", "omplate"],
//   order: function (a, b) {
//     return [this.maindish[a], this.sidedish[b]];
//   },
// };

// [mainDish, sideDish] = hotel.order(0, 1);
// console.log(mainDish, sideDish);

// Array methods

// 1. push()
// 2. pop()
// 3. unshift()
// 4. shift()

// const brothers = ["Soosai", "ranjan", "Paul Arockiyam"];
// brothers.unshift("Ajith");
// brothers.unshift("david");
// brothers.pop();
// brothers.pop();
// brothers.pop();
// brothers.push("Ranjan");
// brothers.push("Soosai");
// brothers.push("Paul Arockiyam");
// brothers.unshift("david");
// brothers.shift();

// // delete brothers[1];

// console.log(brothers.length);

// Deletion of the array

// 1. Delete
// 2. splice()
// 3. slice()
// 4. concat()

const friends = ["pevin", "Anthony", "SivaKumar", "Raj"];
delete friends[1];
friends[1] = "vetrivel";

friends.splice(2, 2, "pravin abdul kalam", "kalyanraman");
friends.splice(0, 1);
friends.splice(2, 1, "santhosh", "bhrathhi");
friends.splice(1, 0, "Ayyanar");
friends.splice(-1, 0, "logesh");

// const newFriends = friends.slice(-2);

// console.log(friends);
// console.log(newFriends);

// console.log(friends);

friends.forEach((item) => console.log(item));

friends.forEach((item, index, array) => {
  console.log(`${item} at the index ${index} in [${array}]`);
});
