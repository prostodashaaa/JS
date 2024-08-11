const array = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 6, name: "Вася" },
  { id: 6, name: "Вася" },
];

const arraySet = new Set(array.map(obj => obj.id).map(id => array.find(item => item.id === id)));
console.log(arraySet);
