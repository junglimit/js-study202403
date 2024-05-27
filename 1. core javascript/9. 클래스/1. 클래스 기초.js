
class Dog {

  constructor(dogName, age) {
    this.dogName = dogName;
    this.age = age;
  }

  bark() {
    console.log(`${this.dogName}가 왈왈왈!!!`);
  }
}

class DogRepository {
  constructor() {
    this.dogList = [];
  }
}

const dr = new DogRepository();


const dog1 = new Dog('초코', 2);
const dog2 = new Dog('나비', 4);

dr.dogList.push(dog1);
dr.dogList.push(dog2);
dr.dogList.push(new Dog('랄랄라', 1));

console.log(dog1);

for (const d of dogList) {
  d.bark();
}
