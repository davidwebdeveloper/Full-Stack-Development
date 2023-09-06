// Write a function that takes an array of objects with a name and hobbies property and returns a new array with only the objects where the hobbies include a given hobby. Use the filter method to accomplish this.

const person = [
  {
    name: "david",
    hobbie: "playing chess",
  },
  { name: "Vetrivel", hobbie: "reading book" },
  { name: "Pravin", hobbie: "reading book" },
];

const userInput = prompt("Etner the hobby name?").toLowerCase();

const newArray = person.filter(({ hobbie }) => hobbie === userInput);
console.log(newArray);
