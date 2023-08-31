// calculate Age

// Normal function

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// console.log(calcAge(2002));

// Function Expression

// const ageCalc = function (birthYear) {
//   return 2023 - birthYear;
// };

// console.log(ageCalc(2002));

// Arrow Function

// const calcAge = (birthYear) => 2023 - birthYear;
// console.log(calcAge(2002));

// const yearsLeftRetirement = (birthYear, name) => {
//   const age = 2023 - birthYear;
//   const retirement = 60 - age;
//   return `${name} retires in ${retirement} years.`;
// };

// console.log(yearsLeftRetirement(2002, "david"));
// console.log(yearsLeftRetirement(2000, "ajith"));
// console.log(yearsLeftRetirement(1998, "ranjan"));
// console.log(yearsLeftRetirement(1991, "paul"));

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  return `Juice made with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
};

console.log(fruitProcessor(5, 10));
