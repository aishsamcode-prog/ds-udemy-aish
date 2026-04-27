function sumOfNumbers(n) {
  let sum = (n * (n + 1)) / 2;
  return sum;
}
let t1 = performance.now();
sumOfNumbers(10000000000);
let t2 = performance.now();
console.log("Elapsed time" + (t2 - t1) / 1000);
