class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {}
}

class fixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal() {
    return this.amount;
  }
}

class hourBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal(hour) {
    return this.amount * hour;
  }
}

class itemBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal(...args) {
    return this.amount * args.length;
  }
}

const fix = new fixBilling(50);
console.log(fix.calculateTotal());

const hour = new hourBilling(50);
console.log(hour.calculateTotal(2));

const item = new itemBilling(50);
console.log(item.calculateTotal(2, 3, 3, 4));

