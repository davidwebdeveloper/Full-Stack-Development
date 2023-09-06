// Write a function that takes an array of objects with a name and grades property and returns a new array with only the objects where the average grade is greater than a given amount. Use the filter method to accomplish this.

const student = [
  {
    name: "vetri",
    grade: [90, 50, 60, 80, 40],
  },
  { name: "david", grade: [50, 30, 40, 50, 60] },
  {
    name: "pravin",
    grade: [40, 50, 30, 70, 60],
  },
];

const gradeCalc = function ({ grade }) {
  if (grade > 60) return grade;
};

const newArray = student.filter(gradeCalc);
console.log(newArray);
