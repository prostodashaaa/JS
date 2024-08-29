class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  talk() {
    console.log(`Язык: ${this.language}, 
    Имя: ${this.name}`);
  }
}

class Ork extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  talk() {
    console.log(`Язык: ${this.language}, 
Имя: ${this.name} 
Имеет оружие: ${this.weapon}`);
  }

  blow() {
    console.log(
      `${this.race} по имени ${this.name} использует своё оружие - ${this.weapon}, и наносит удар!`
    );
  }
}

class Elf extends Character {
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell;
  }

  talk() {
    console.log(`Язык: ${this.language}, 
Имя: ${this.name} 
Имеет заклинание: ${this.spell}`);
  }

  createSpell() {
    console.log(
      `${this.race} по имени ${this.name} использует своё заклинание - ${this.spell}, и наносит удар!`
    );
  }
}

const orc = new Ork('Орк', 'орк', 'орчий', 'топор');
orc.blow();

const elf = new Elf('Эльф', 'эльф', 'эльфийский', 'Акцио');
elf.createSpell();
