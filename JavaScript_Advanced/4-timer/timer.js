const LIMIT_MONTH = 11;

const MAP_MONTHS = {
  1: () => 31,
  2: (year) =>
    year % 400 === 0 ? 29 : year % 100 === 0 ? 28 : year % 4 === 0 ? 29 : 28,
  3: () => 31,
  4: () => 30,
  5: () => 31,
  6: () => 30,
  7: () => 31,
  8: () => 31,
  9: () => 30,
  10: () => 31,
  11: () => 30,
  12: () => 31,
};

const arrayMonths = ["месяц", "месяца", "месяцев"];
const arrayDays = ["день", "дня", "дней"];
const arrayHours = ["час", "часа", "часов"];
const arrayMinutes = ["минута", "минуты", "минут"];
const arraySeconds = ["секунда", "секунды", "секунд"];
const arrayText = [
  arrayMonths,
  arrayDays,
  arrayHours,
  arrayMinutes,
  arraySeconds,
];

function getTime() {
  let today = new Date();
  const end = new Date(today.getFullYear() + 1, 0, 1).getTime();
  let diff = end + 100 - new Date();

  const months = LIMIT_MONTH - today.getMonth();
  const days =
    MAP_MONTHS[String(today.getMonth())](today.getFullYear()) - today.getDate();
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  let array = [months, days, hours, minutes, seconds];
  return array;
}

function showText(fn) {
  const array = fn();
  [months, days, hours, minutes, seconds] = array;
  let i = 0;
  for (let elem of array) {
    const part = document.getElementById(`${i}`);
    console.log(part.firstChild.innerHTML);
    console.log(part.lastChild.innerHTML);
    if (elem % 10 === 1 && elem !== 11) {
      part.firstChild.textContent = elem;
      part.lastChild.textContent = arrayText[i][0];
    } else if (
      (String(elem).slice(-1) === "2" ||
        String(elem).slice(-1) === "3" ||
        String(elem).slice(-1) === "4") &&
      elem !== 12 &&
      elem !== 13 &&
      elem !== 14
    ) {
      part.firstChild.textContent = elem;
      part.lastChild.textContent = arrayText[i][1];
    } else {
      part.firstChild.textContent = elem;
      part.lastChild.textContent = arrayText[i][2];
    }
    i++;
  }
}

setInterval(() => {
  showText(getTime);
}, 1000);
