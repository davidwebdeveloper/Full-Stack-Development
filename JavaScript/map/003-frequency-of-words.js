const word = ["david", "vetrivel", "vetrivel"];
let myObj = {};
word.map(count);

const count = function (e) {
  for (i = 0; i < word.length; i++) {
    if (word[i] == e) {
      count++;
    }
  }
  return count;
};
