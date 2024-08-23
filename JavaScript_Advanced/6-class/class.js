class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  set mileage(value) {
    if (Number(value) >= 0) {
      this.#mileage = value;
    }
  }

  get mileage() {
    return this.#mileage;
  }

  getInfo() {
    return `Марка: ${this.#brand}
Модель: ${this.#model}
Пробег: ${this.#mileage}`;
  }
}

const car = new Car("nissan", "e105", "100");

car.mileage = "1";
console.log(car.getInfo());
