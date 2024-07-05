let max = 20;
let min = 0;
let arrayLength = Math.ceil(Math.random() * (max - min)) + min;
let arr = Array.from(
  { length: arrayLength },
  () => Math.ceil(Math.random() * (max - min)) + min
);

function arrayClean(arr, fn) {
  if (!Array.isArray(arr)) {
    return "Это не массив";
  } else if (arr.length === 0) {
    return "Пустой массив!";
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
  return element % 2 === 0 && element !== 0;
}

console.log(arrayClean(arr, filter));
console.log(arrayClean([], filter));
