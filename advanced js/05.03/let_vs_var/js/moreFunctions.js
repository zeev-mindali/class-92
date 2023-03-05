const array = [1, 2, 3, 4, 5, 6];
const grades = [90, 80, 70, 90, 80, 120, 100, 50, 90, 70, 80, 90];

const findMax = (ataKartzya) => {
  let maxNumber = 0;
  for (let index = 0; index < ataKartzya.length; index++) {
    if (maxNumber < ataKartzya[index]) {
      maxNumber = ataKartzya[index];
    }
  }
  return maxNumber;
};

const findMax2 = (userArray) => {
  let maxNumber = 0;
  //   userArray.map((item) => {
  //     if (item > maxNumber) {
  //       maxNumber = item;
  //     }
  //   });
  userArray.map((item) =>
    item > maxNumber ? (maxNumber = item) : (maxNumber = maxNumber)
  );
  return maxNumber;
};

//var myMaxNumber = findMax(grades);
//console.log(findMax2(grades));

var maxNum = Math.max.apply(Math, grades);
console.log(maxNum);
