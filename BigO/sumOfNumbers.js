function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
let t1 = performance.now();
sumOfNumbers(10000000000);
let t2 = performance.now();
console.log("Elapsed time" + (t2 - t1) / 1000);
