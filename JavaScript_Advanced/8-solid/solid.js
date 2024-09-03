class Billing {
  #amount = 100;

  calculateTotal() {
    console.log("lll");
    return this.#amount;
  }
}

class fixBilling extends Billing {

  calculateTotal() {
    return super.calculateTotal();
  }
}

class hourBilling extends Billing {

  calculateTotal(hour) {
    return super.calculateTotal() * hour;
  }
}

class itemBilling extends Billing {

  calculateTotal(...args) {
    return super.calculateTotal() * args.length;
  }
}

const fix = new fixBilling();
console.log(fix);
console.log(fix.calculateTotal());

const hour = new hourBilling();
console.log(hour);
console.log(hour.calculateTotal(2));

const item = new itemBilling();
console.log(item);
console.log(item.calculateTotal(2, 3, 3, 4));
