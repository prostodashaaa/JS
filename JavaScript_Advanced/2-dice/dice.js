function getRandomNumber(dice) {
  const result = Math.floor(Math.random() * dice + 1);
  document.querySelector('.panel').innerHTML = result;
  return result;
}
