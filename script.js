//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}
