let max = 9;
let i = 0;
const cardNumber = Array.from({ length: 19 }, () => {
  if ((i + 1) % 5 == 0) {
    i++;
    return "-";
  }
  i++;
  return Math.round(Math.random() * max);
}).join("");

function algorithmLuna(cardNumber) {
  let validCardNumber = cardNumber.replaceAll("-", "").split("");
  validCardNumber = validCardNumber.map((item, index) =>
    index % 2 === 0 ? (item * 2 > 9 ? item * 2 - 9 : +item * 2) : +item
  );
  let sum = validCardNumber.reduce((sum, current) => sum + current, 0);
  return sum % 10 == 0;
}

console.log(algorithmLuna(cardNumber));
