function havePassport(date) {
  date = new Date(date);
  let today = new Date();

  const limit = 14;
  if (today.getFullYear() - date.getFullYear() > limit) {
    return true;
  } else if (today.getFullYear() - date.getFullYear() === limit) {
    if (compare(today.getMonth(), date.getMonth()) === 1) return true;
    if (!compare(today.getMonth(), date.getMonth())) {
      return compare(today.getDate(), date.getDate()) !== -1 ? true : false;
    }
  }
  return false;
}

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

console.log(havePassport("2020-08-10"));
