// const david = {
//   firstName: "David",
//   lastName: "M",
//   birthYear: 2002,
//   friends: ["Ramesh", "Vetri", "Pravin", "Raman", "Siva Kumar"],
//   job: "Full Stack Developer",
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAge()} old student`;
//   },
// };

// const ajith = {
//   firstName: "Ranjan",
//   lastName: "M",
//   birthYear: 1998,
//   friends: ["Karukkuvel", "Francis", "Selva"],
//   job: "Front End Developer",
// };

// console.log(
//   `${david.firstName} has ${david["friends"].length} friends and his best friend is ${david.friends[1]}`
// );
// console.log(`${david.firstName} is ${david.calcAge()} old student`);

// console.log(david.getSummary());
// console.log(ajith.getSummary());

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: "78",
  height: "1.69",
  calcBmi: function () {
    const bmi = this.weight / (this.height * this.height);
    return (this.bmi = bmi);
  },
};

const david = {
  firstName: "David",
  lastName: "M",
  height: "1.95",
  weight: "92",

  calcBmi: function () {
    bmi = this.weight / (this.height * this.height);
    return (this.bmi = bmi);
  },
};

console.log(mark.calcBmi());
console.log(david.calcBmi());

console.log(david);

if (mark.bmi > david.bmi) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI is higer than ${david.firstName} ${david.lastName}'s BMI`
  );
} else {
  console.log(
    `${david.firstName} ${david.lastName}'s BMI is higer than ${mark.firstName} ${mark.lastName}'s BMI`
  );
}

console.log(`david BMI = ${david.bmi}`);
console.log(`Mark BMI = ${mark.bmi}`);
