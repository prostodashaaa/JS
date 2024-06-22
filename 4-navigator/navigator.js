let positionLat = +prompt('Введите широту точки отправления', 0);
let positionLong = +prompt('Введите долготу точки отправления', 0);
let addressLat = +prompt('Введите широту точки пребытия', 0);
let addressLong = +prompt('Введите долготу точки пребытия', 0);

alert(Math.sqrt((addressLat - positionLat)^2 + (addressLong - positionLong)^2));