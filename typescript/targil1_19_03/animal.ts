class Animal {
  name: string;
  sound: string;
  isAlive: boolean;

  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
    this.isAlive = true;
  }

  makeSound = () => {
    if (this.isAlive) {
      console.log(this.sound);
    } else {
      console.log("The animal is dead, alla erchamu");
    }
  };

  eatAnimal = (animal: any) => {
    animal.isAlive = false;
  };

  drinkMilk = (cow: Cow) => {
    if (cow instanceof Cow) {
      if (cow.isAlive) {
        console.log("Milk yami yami");
      } else {
        console.log("Ichassss, don't like blood");
      }
    } else {
      console.log("Wrong animal");
    }
  };
}

class Lion extends Animal {
  isAlpha: boolean;
  constructor(name: string, sound: string, isAlpha: boolean) {
    super(name, sound);
    this.isAlpha = isAlpha;
  }
}

class Cow extends Animal {
  constructor(name: string, sound: string) {
    super(name, sound);
  }
}

class Cat extends Animal {
  constructor(name: string, sound: string) {
    super(name, sound);
  }
}

class Mouse extends Animal {
  constructor(name: string, sound: string) {
    super(name, sound);
  }
}

const lev = new Lion("Lev", "ROAR!!!!!", true);
const mushMush = new Cow("MushMush", "Muuuuuuuuuuuuuuu");
const bumper = new Cat("Bumper", "Miaooooo");
const mish = new Mouse("Mish", "Sqwick");

let myZoo = [lev, mushMush, bumper, mish];
myZoo.map((item) => item.makeSound());

//console.log(bumper);
// bumper.drinkMilk(mushMush);
// lev.eatAnimal(mushMush);
// console.log(mushMush);
// bumper.drinkMilk(mushMush);
// mushMush.makeSound();
