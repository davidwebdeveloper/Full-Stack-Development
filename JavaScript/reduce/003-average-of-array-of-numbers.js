const marksDavid = [95, 81, 90, 96, 97];

const avg = marksDavid.reduce((total, num) => {
  return total + num / marksDavid.length;
});

console.log(avg);
