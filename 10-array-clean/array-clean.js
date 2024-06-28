let max = 20;
let min = 0;
let arrayLength = Math.ceil(Math.random() * (max - min)) + min;
let arr = Array.from(
  { length: arrayLength },
  () => Math.ceil(Math.random() * (max - min)) + min
);

function arrayClean(arr, fn) {
  if (arr === undefined || arr.length == 0) {
    return 'Пустой массив!';
  }
  let res = [];
  for (let element of arr) {
    if (!fn(element)) {
      res.push(element);
    }
  }
  return res;
}

function filter(element) {
    if (element % 2 === 0 && element !== 0) {
      return false;
    }
    return true;
}

console.log(arrayClean(arr, filter));
console.log(arrayClean([], filter));
