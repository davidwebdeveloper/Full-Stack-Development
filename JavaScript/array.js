const transactions = [200, 300, -400, -200, 500, -300, -300, 600, -100];

// For of loop

for (const transaction of transactions) {
  if (transaction > 0) {
    console.log(`Deposite is : ${transaction}`);
  } else {
    console.log(`Widthdrawel is : ${Math.abs(transaction)}`);
  }
}

// For each loop
console.log(`-----For each loop------`);

transactions.forEach(function (transaction) {
  if (transaction > 0) {
    console.log(`Deposite is : ${transaction}`);
  } else {
    console.log(`Widthdrawel is : ${Math.abs(transaction)}`);
  }
});
