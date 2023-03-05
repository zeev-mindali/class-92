function addSumToContext(num1, num2, num3) {
  this.sum = num1 + num2 + num3;
}

function divideSumToContext(num1, num2) {
  this.sum = num1 / num2;
}
//as function
addSumToContext(10, 20, 30); //context = window
console.log("function :", sum);

function convertNisToDollar(num) {
  this.sum = sum / 3.5;
}

//as method :)
var obj0 = {
  addSumToObj0: addSumToContext,
  divideSumToObj0: divideSumToContext,
  convertNisToDollar: convertNisToDollar,
};

obj0.addSumToObj0(10, 20, 30); //context = obj0
console.log("Method: ", obj0.sum);

obj0.divideSumToObj0(8, 4);
console.log(obj0.sum);

//indirect invocation
var obj1 = {};
addSumToContext.call(obj1, 40, 50, 60); //context = obj1

console.log(obj1.sum);

var obj2 = {};
addSumToContext.apply(obj2, [10, 20, 30]); //context =obj2
console.log(obj2.sum);

var obj3 = new addSumToContext(40, 50, 60); //context = newly created object
console.log(obj3.sum);
