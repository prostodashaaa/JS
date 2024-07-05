let dates = [
  " 10.02.22 ",
  "0.13.22",
  "11.12.23",
  "21.12",
  "test",
  "01/02/2024",
  "02/29/2024",
  "29/02/2023",
  "29/02/2100",
];

const MAP_MONTHS = {
  "01": () => 31,
  "02": (year) =>
    year % 400 === 0 ? 29 : year % 100 === 0 ? 28 : year % 4 === 0 ? 29 : 28,
  "03": () => 31,
  "04": () => 30,
  "05": () => 31,
  "06": () => 30,
  "07": () => 31,
  "08": () => 31,
  "09": () => 30,
  10: () => 31,
  11: () => 30,
  12: () => 31,
};

function isDate(dates) {
  let validDates = [];
  validDates = dates
    .map((date) => {
      date = date.trim();
      let firstPart = date.slice(0, 2);
      let secondPart = date.slice(3, 5);
      let year = date.slice(6);
      let isSplit = isNaN(date[2]) && isNaN(date[5]);
      let isNum = !isNaN(secondPart) && !isNaN(firstPart) && !isNaN(year);
      if (isSplit && isNum && (year.length === 2 || year.length === 4)) {
        if (
          secondPart in MAP_MONTHS &&
          MAP_MONTHS[secondPart](year) >= firstPart
        ) {
          return `${firstPart}.${secondPart}.${year}`;
        } else if (
          firstPart in MAP_MONTHS &&
          MAP_MONTHS[firstPart](year) >= secondPart
        ) {
          return `${secondPart}.${firstPart}.${year}`;
        }
      }
      return "";
    })
    .filter((date) => {
      return date !== "";
    });
  return validDates;
}

console.log(isDate(dates));
