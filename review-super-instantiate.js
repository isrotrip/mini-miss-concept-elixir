// 1. Penggunaan super dan constructor yang tidak tepat

class FruitTree {
  #name
  #age
  #deadAge
  constructor(name, age, deadAge) {
    this.#name = name;
    this.#age = age;
    this.#deadAge = deadAge;
  }

	set name(name) {
    this.#name = name;
  }

  set age(age) {
    this.#age = age;
  }
}

class MangoTree extends FruitTree {
  #tumbuhKesamping
  constructor(age) { // gunakan constructor
    super('mangoTree', age, 100); // super di pake
    // this._deadAge = 100 // ini ngga boleh kaya ngerassign properties parentnya
    this.#tumbuhKesamping = true; // ini memang seperti, kalau properti khusus
	}
}

const pohonSule = new MangoTree(10)
console.log(pohonSule)