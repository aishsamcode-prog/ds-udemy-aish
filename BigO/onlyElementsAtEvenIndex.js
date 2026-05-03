function onlyElementsAtEvenIndex(arr) {
  let newArr = Array(Math.ceil(arr.length / 2));
  // let newArr = []
  console.log("before", newArr);
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      newArr[i / 2] = arr[i];
    }
  }
  return newArr;
}

console.log(onlyElementsAtEvenIndex([1, 3, 56, 88, 99, 9]));
