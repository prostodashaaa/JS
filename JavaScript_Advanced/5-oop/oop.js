const Character = function (species, name, language) {
  this.species = species;
  this.name = name;
  this.language = language;
};

Character.prototype.talk = function () {
  return `Язык: ${this.language}
Имя: ${this.name}`;
};

const Orc = new Character("orc", "bbb", "orcish");
Orc.weapon = true;
Orc.hit = function() {
  let power = 0;
  if (this.weapon) {
    return `Сила удара: ${power+=100}`;
  }
  return `Оружия нет.
  Сила удара: ${power}`;
};

const Elf = new Character('elf', 'aaa', 'elfish');
Elf.spell = [];
Elf.addSpell = function(str) {
  if (this.spell.find(item => item === str)) {
    return `Заклинание ${str} уже есть.`
  }
  this.spell.push(str);
  return this.spell;
}

console.log(Orc.hit());
console.log(Elf.addSpell('ляляля'));
console.log(Elf.addSpell('лололо'));
console.log(Elf.addSpell('ляляля'));
