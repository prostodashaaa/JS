let arr = [1, 40, -5, 10, 0];

function sort(arr, typeSorting = true) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  if (typeSorting) {
    return arr;
  }
  return arr.reverse();
}

console.log(sort(arr, true));
console.log(sort(arr, false));
