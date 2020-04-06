class FruitTree {
  constructor() {
    this._fruits = [];
  }

  produceFruits() {
    this._fruits.push(new Fruit());
  }
}

class Fruit {}

class MangoTree extends FruitTree {
  constructor() {
    super();
  }

  produceFruits() { // diminta overriding
    this._fruits.push(new Mango());
  }
}

class Mango extends Fruit {}