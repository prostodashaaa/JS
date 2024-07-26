function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    return 'На ноль делить нельзя)';
  }
  return a / b;
}

const input = document.querySelectorAll("input");

document.getElementById("plus").addEventListener("click", function () {
  let result = sum(Number(input[0].value), Number(input[1].value));
  document.querySelector(".calc__panel").innerHTML = result;
});

document.getElementById("minus").addEventListener("click", function () {
  let result = diff(Number(input[0].value), Number(input[1].value));
  document.querySelector(".calc__panel").innerHTML = result;
});

document.getElementById("times").addEventListener("click", function () {
  let result = multiply(Number(input[0].value), Number(input[1].value));
  document.querySelector(".calc__panel").innerHTML = result;
});

document.getElementById("divide").addEventListener("click", function () {
  let result = div(Number(input[0].value), Number(input[1].value));
  document.querySelector(".calc__panel").innerHTML = result;
});
