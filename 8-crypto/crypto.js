function crypto (password) {
  let array = password.split('');
  let arrayFirst = array.slice(0, array.length / 2).reverse();
  let arraySecond = array.slice(array.length / 2).reverse();
  return arrayFirst.concat(arraySecond).join('');
}

function check (codePassword, password) {
  return (crypto(codePassword) === password);
}

console.log(crypto('password'));
console.log(check('ssapdrow', 'password'));
console.log(check('ssassdrow', 'password'));

console.log(crypto('Loremipsumdolor'));
console.log(check('pimeroLrolodmus', 'Loremipsumdolor'));