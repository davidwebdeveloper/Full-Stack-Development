const david = {
  firstName: "David",
  lastName: "M",
  birthYear: 2002,
  friends: ["Ramesh", "Vetri", "Pravin", "Raman", "Siva Kumar"],
  job: "Full Stack Developer",
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} old student`;
  },
};

const ajith = {
  firstName: "Ranjan",
  lastName: "M",
  birthYear: 1998,
  friends: ["Karukkuvel", "Francis", "Selva"],
  job: "Front End Developer",
};

// console.log(
//   `${david.firstName} has ${david["friends"].length} friends and his best friend is ${david.friends[1]}`
// );
// console.log(`${david.firstName} is ${david.calcAge()} old student`);

console.log(david.getSummary());
console.log(ajith.getSummary());
