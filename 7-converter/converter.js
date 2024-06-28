let map = new Map();
map.set('RUB_USD', 0.011369);
map.set('RUB_EUR', 0.010609);
map.set('RUB_BYN', 0.036673);
map.set('RUB_CNY', 0.083019);
map.set('USD_RUB', 87.96);
map.set('USD_EUR', 0.93207);
map.set('USD_BYN', 3.27);
map.set('USD_CNY', 7.26);
map.set('EUR_RUB', 94.26);
map.set('EUR_USD', 1.07);
map.set('EUR_BYN', 3.51);
map.set('EUR_CNY', 7.79);
map.set('BYN_RUB', 27.27);
map.set('BYN_USD', 0.305605);
map.set('BYN_EUR', 0.284845);
map.set('BYN_CNY', 2.22);
map.set('CNY_RUB', 12.05);
map.set('CNY_USD', 0.137779);
map.set('CNY_EUR', 0.12842);
map.set('CNY_BYN', 0.45084);

function moneyExchange (sumMoney, fromCurrency, toCurrency) {
    if (fromCurrency.toUpperCase() == toCurrency.toUpperCase()) {
    return 'Вы выбрали одинаковые валюты';
    }

    if (map.has(fromCurrency.toUpperCase() + '_' + toCurrency.toUpperCase())) {
      let convertMoney = sumMoney * map.get(fromCurrency.toUpperCase() + '_' + toCurrency.toUpperCase());
      return `${sumMoney}${symbolCurrency(fromCurrency.toUpperCase())} = ${convertMoney}${symbolCurrency(toCurrency.toUpperCase())}`; 
    } 
    return null;
}

function symbolCurrency (str) {
  if (str.toUpperCase() == 'RUB') return '₽';
  if (str.toUpperCase() == 'USD') return '$';
  if (str.toUpperCase() == 'EUR') return '€';
  if (str.toUpperCase() == 'BYN') return 'Br';
  if (str.toUpperCase() == 'CNY') return '¥';
} 

console.log(moneyExchange(2000, 'RUB', 'USD'));
console.log(moneyExchange(6000, 'USD', 'EUR'));
console.log(moneyExchange(6000, 'usd', 'eur'));
console.log(moneyExchange(6000, 'usda', 'eur'));
console.log(moneyExchange(6000, 'usd', 'eura'));
console.log(moneyExchange(2000, 'RUB', 'RUB'));