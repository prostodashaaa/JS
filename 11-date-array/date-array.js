let dates = [" 10.02.22 ", "0.13.22", "11.12.23", "21.12", "test", '01/02/2024'];

const MAP_MONTHS = {
  "01": 31,
  "02": 29,
  "03": 31,
  "04": 30,
  "05": 31,
  "06": 30,
  "07": 31,
  "08": 31,
  "09": 30,
  "10": 31,
  "11": 30,
  "12": 31,
};

function isDate(dates) {
  let validDates = [];
  validDates = dates
    .filter((date) => {
      date = date.trim();
      let day = date.slice(0, 2);
      let month = date.slice(3, 5);
      let year = date.slice(6);
      let isSplit = isNaN(date[2]) && isNaN(date[5]);
      if (
        isSplit &&
        !isNaN(month) &&
        !isNaN(day) &&
        !isNaN(year) &&
        month in MAP_MONTHS &&
        MAP_MONTHS[month] >= day &&
        (year.length === 2 || year.length === 4)
      ) {
        return true;
      }
      return false;
    })
    .map((date) => {
      date = date.replaceAll("-", ".");
      date = date.replaceAll("/", ".");
      return date;
    });
  return validDates;
}

console.log(isDate(dates));
