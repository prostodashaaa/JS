const calculate = {
  sum: function () {
    return this.a + this.b;
  },

  diff: function () {
    return this.a - this.b;
  },

  multiply: function () {
    return this.a * this.b;
  },

  div: function () {
    if (this.b === 0) {
      return "На ноль делить нельзя)";
    }
    return this.a / this.b;
  },

  read() {
    this.a = Number(document.querySelectorAll("input")[0].value);
    this.b = Number(document.querySelectorAll("input")[1].value);
  },
};

function getAnswer(action) {
  calculate.read();
  let result = calculate[action]();
  document.querySelector(".calc__panel").innerHTML = result;
}
