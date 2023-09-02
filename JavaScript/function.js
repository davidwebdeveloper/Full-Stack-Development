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

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);
//   return `Juice made with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
// };

// console.log(fruitProcessor(5, 10));

// const a=[10,12,11,15]

// const a = "hi";
// function first() {
//   const b = "how";
//   function second() {
//     const c = "why";
//     third();
//     console.log(d);
//   }
//   second();
// }
// first();
// function third() {
//   const d = "david";
//   console.log(d);
// }

// Execution context
// -Global -- const a='hi', function first(), function third()
//  -first -- const a = 'hi', const b = 'is' , function first(), function third()
//      -second -- const a='hi', const b = 'is',  const c = 'Good', funtion first(), function third()
//  -third -- const a= 'hi', const d = 'boy'

// Call stack
// ---first()
//       --- second()
//

// // Anonymos Function

// const birthY = [2002, 2000, 1991];
// const age = function (birthYear) {
//   let age = 2023 - birthYear;
//   console.log(age);
//   return age;
// };

// birthY.forEach(age);

// // birthY.forEach(age(birthY));

// //

// a = ["hi", "how", "are", "you"];
// a.forEach(function display(e) {
//   console.log(e);
// });

// const c = ["welcome", "to", "my", "programming", "world"];
// function view(e) {
//   console.log(e);
// }

// c.forEach(view);

// // Arrow Function
// c.forEach((e) => console.log(e));

// //

// const a = [10, 45, 10, 32];

// // Normal Funciton using Map

// function mapMul(e) {
//   return e * 2;
// }

// console.log((newA = a.map(mapMul)));

// // arrow function using map

// console.log((newB = a.map((e) => e * 5)));

// // Anonymus Function using map

// const mapAnonymus = function (e) {
//   return e * 3;
// };

// console.log((newC = a.map(mapAnonymus)));

// //

// console.log(
//   (newD = a.map(function (e) {
//     return e * 4;
//   }))
// );

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = function (num) {
  if (num % 2 == 0) {
    return num;
  }
};

const functionMethod = a.filter(isEven);
console.log(functionMethod);
