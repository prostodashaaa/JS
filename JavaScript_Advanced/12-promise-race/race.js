async function getProduct(id) {
  const response = await fetch("https://dummyjson.com/products/" + id);
  return response.json();
}

function race(promises) {
  if (!Promise.race) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve).catch(reject);
      });
    });
  }
  return Promise.race(promises);
}

let array = [getProduct(1), getProduct(2), getProduct(3)];

race(array).then((data) => console.log(data));
