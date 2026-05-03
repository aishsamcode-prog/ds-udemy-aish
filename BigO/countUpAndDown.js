function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }
}
console.log(countUpAndDown(10));
