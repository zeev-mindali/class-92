class Person {
  name: string;
  age: number;
  gender: string;
  iq: number;
  yearOfBirth: number;

  constructor(name: string, age: number, gender: string, iq: number) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.iq = iq;
    this.yearOfBirth = 2023 - age;
  }

  getYearOfBirth = () => {
    return this.yearOfBirth;
  };

  printMe = (status: HealthStatus) => {
    if (status.isAlive) {
      console.log(this);
    } else {
      console.log("he is dead, alla irchamu");
    }
  };
}

class Student extends Person {
  avgGrade: number;
  constructor(
    name: string,
    age: number,
    gender: string,
    iq: number,
    avgGrade: number
  ) {
    super(name, age, gender, iq);
    this.avgGrade = avgGrade;
  }
}

class Lecturer extends Person {
  classes: string[] = [];
  status: HealthStatus;
  constructor(
    name: string,
    age: number,
    gender: string,
    iq: number,
    classes: string[],
    status: HealthStatus
  ) {
    super(name, age, gender, iq);
    this.classes = classes;
    this.status = status;
  }
}

class HealthStatus {
  bmi: number;
  isAlive: boolean;

  constructor(bmi: number, isAlive: boolean) {
    this.bmi = bmi;
    this.isAlive = isAlive;
  }
}

// let o = new Object();
// o.name = "zeev";
// o.age = 49;
// o.gender = "male";
// o.car="xt6";

let daniel = new Student("daniel #1", 22, "male", 120, 95);
// daniel.name = "daniel #1";
// daniel.age = 22;
// daniel.gender = "male";
// daniel.iq = 120;

//console.log(daniel.printMe());

let elena = new Student("elena", 30, "female", 61, 60);
// elena.name = "elena";
// elena.gender = "female";
// elena.iq = 61;

//console.log(elena.printMe());
let igal = new Student("igal #2", 26, "male", 108, 100);

//console.log(igal.printMe());

let zeev = new Lecturer(
  "zeev",
  49,
  "male",
  100,
  ["java", "web", "python", "dotNet", "DevOps", "Cloud", "ML/AI"],
  new HealthStatus(100, false)
);
console.log(zeev.printMe(new HealthStatus(100, true)));
