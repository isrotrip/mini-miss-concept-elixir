// 2. factory method dan encapsulation

class FruitTree {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name || 'FruitTree';
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

class MangoTree extends FruitTree {
  constructor(age) {
    super('mangoTree', age);
  }
}

class TreeGrove {
  #trees;
  constructor() {
    this.#trees = []
  }

  inputTree(name, age) {
    // factory method
    if (name === 'mangoTree') {
      this.#trees.push(new MangoTree(age));
    }
  }

  showTrees() {
    console.log(`Here are list of trees`)
    for (let i = 0; i < this.#trees.length; i++) {
      const checkTree = this.#trees[i];
      console.log(checkTree);
      console.log(`Number ${i}: ${checkTree.name} - ${checkTree.age}`)
    }
  }
}

const grove = new TreeGrove();
grove.inputTree('mangoTree', 10);
grove.showTrees();