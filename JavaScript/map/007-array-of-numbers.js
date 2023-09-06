const a = [1, 3, 44, 67, 3];
const isPrime = function(e) {
    let count=0;
        for(j=1;j<=e/2;j++) {
            if(e%j==0)
                count++;
        }
        if(count<=1)
            return true;
}
const primeFactors = function (e) {
  const result = [];
  for (i = 2; i <= e; i++) {
    if (isPrime(i)) {
        if(e%i==0)
      
    }
  }
};
console.log(primeFactors(44));

// const c = a.map((e, index, array) => {
//   const b = {};

//   b[e] = d;
//   return b;
// });
// console.log(d);
