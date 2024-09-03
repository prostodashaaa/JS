class Billing {
  #amount = 100;

  getAmount() {
    return this.#amount;
  }

  calculateTotal() {}
}

class fixBilling extends Billing {
  calculateTotal() {
    return this.getAmount();
  }
}

class hourBilling extends Billing {
  calculateTotal(hour) {
    return this.getAmount() * hour;
  }
}

class itemBilling extends Billing {

  calculateTotal(...args) {
    return this.getAmount() * args.length;
  }
}

const fix = new fixBilling();
console.log(fix.calculateTotal());

const hour = new hourBilling();
console.log(hour.calculateTotal(2));

const item = new itemBilling();
console.log(item.calculateTotal(2, 3, 3, 4));
