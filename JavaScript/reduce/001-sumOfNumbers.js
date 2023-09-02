const marksDavid = [95, 81, 90, 96, 97];
const totalDavid = marksDavid.reduce((total, num) => {
  return total + num;
}, 0);
console.log(totalDavid);
