//examples

const func1 = () => {
  //num1 we need it as global variable...
  var num1 = 4;

  if (num1 == 4) {
    var num1 = 3;
  }
};

//function to run
// func1();
// console.log(num1);

// const setLetAndVar = () => {
//   let a = 4;
//   {
//     var a;
//     console.log(a);
//   }
// };

//setLetAndVar();
const setLet = () => {
  let a = 4;
  {
    let a;
    console.log(a);
  }
  console.log(a);
};
//setLet();

const correctForUsage = () => {
  //LOL
  for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
  }
  //LMAO
};

// const doubleVar = () => {
//   var a = 100;
//   {
//     var a;
//     console.log(a);
//   }
// };
// doubleVar();

const setVar = () => {
  var b = 1;
  console.log("var outer block #1: ", b);
  {
    console.log("var - inner block #2: ", b);
    var b = 11;
    console.log("var inner block #3: ", b);
  }
  console.log(b); //?
  while (b < 11) {
    console.log("adding one");
    b++;
  }
  console.log("elena: Finish him.....");
};

//setVar();

const setOnlyLet = () => {
  let totalPitza = 1;
  {
    let totalPitza = 100;
    console.log(totalPitza);
  }
  while (totalPitza < 10) {
    console.log("another saruf pitza was sold...");
    totalPitza++;
  }
  console.log(totalPitza);
};
setOnlyLet();

const zeev = 10; //immutable
const object = new Object(); //
object.name = "elena";
