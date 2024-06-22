let lang = prompt("Выберите язык: RU, EN, DE, FR, BE, CV", "RU");

switch (lang) {
  case "RU":
    console.log("Привет!");
    break;
  case "EN":
    console.log("Hi!");
    break;
  case "DE":
    console.log("Gutten tag!");
    break;
  case "FR":
    console.log("Salut!");
    break;
  case "BE":
    console.log("Прывітанне");
    break;
  case "CV":
    console.log("Салам)");
    break;
  default:
    console.log("Вы не выбрали язык(");
}
