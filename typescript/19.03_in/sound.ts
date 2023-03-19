interface soundAble {
  makeSound(): void;
}

class Dog implements soundAble {
  makeSound = () => {
    console.log("hauuuu hauuuu");
  };
}

class Tv implements soundAble {
  makeSound = () => {
    console.log("telvision israela min irshalim el kutzzz");
  };
}

class Car implements soundAble {
  makeSound = () => {
    console.log("Varooom Varooom");
  };
}

class Person implements soundAble {
  makeSound() {
    console.log("AAAADDDDDAAAAAMMMMMMMMMMM!!!!!!!!!!");
  }
}

let nipo = new Dog();
let tv = new Tv();
let car = new Car();
let elena = new Person();

let sounding = [nipo, tv, car, elena];

sounding.map((item) => item.makeSound());
