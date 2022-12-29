class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

let monkey = new Animal("monkey", "Ammie");

console.log(monkey);

const fish = new Animal("fish", "Nemo");
console.log(fish)


monkey.name = "OSCAR"

console.log(monkey)