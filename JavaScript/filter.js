a = [10, 24, 54, 34, 56, 25];
const filterExe = a.filter((e) => e % 2 == 0);
console.log(filterExe);

// map

const mapExe = a.map((e) => {
  if (e % 2 == 0) {
    return e;
  }
});
console.log(mapExe);
