const getQueryArray = (obj, path = [], result = []) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    path.push(key);

    if (value instanceof Object) {
      getQueryArray(value, path, acc);
    } else {
      acc.push(
        `${path
          .map((num, index) => (index ? `[${num}]` : num))
          .join("")}=${value}`
      );
    }
    path.pop();

    return acc;
  }, result);

const getQueryString = (obj) => getQueryArray(obj).join("&");

let queryObject = {
  name: "Ann",
  age: 30,
  pasport: {
    series: 2233,
    number: 111111,
    son: {
      name: "Gayorgy",
      age: 228,
    },
  },
  marks: [5, 4, 3, 5, 3],
};

const queryString = getQueryString(queryObject);
console.log(queryString);
