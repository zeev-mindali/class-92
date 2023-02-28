const url =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

const findCar = () => {
  //url -> end point - נקודת קצה
  //which data we want to sent
  const lp = document.getElementById("lp").value;
  const myData = fetch(url + lp)
    .then((response) => response.json())
    .then((data) => displayInfo(data.result.records[0]));
};

const displayInfo = (carData) => {
  //where we want to sent it, or present it....
  //console.log(carData);
  document.getElementById("res").innerHTML = `
    <h1>${carData.mispar_rechev}</h1><hr/>
    <h2>${carData.tozeret_nm}</h2>
    <h3>${carData.kinuy_mishari} ${carData.ramat_gimur}</h3>
    <h3>${carData.tzeva_rechev}</h3>
    <h3>${carData.shnat_yitzur}</h3>
    <hr/>
    <h1>${carData.tokef_dt.toNormalDate()}</h1>
  `;
};

//<h1>${handleDate(carData.tokef_dt)}</h1>
// 0   1  2
//2023-07-11
// const handleDate = (oldDate) => {
//   console.log("type: ", typeof oldDate);
//   const ymd = oldDate.split("-");
//   return ymd[2] + "/" + ymd[1] + "/" + ymd[0];
// };

String.prototype.toNormalDate = function () {
  const ymd = this.split("-");
  return ymd[2] + "/" + ymd[1] + "/" + ymd[0];
};

Array.prototype.lastOne = function () {
  return this[this.length - 1];
};

Array.prototype.removeLast = function () {
  return this.pop();
};

const students = ["zeev", "ran", "shir", "elena", "lin", "Alon1"];
// Ran LOL
// console.log(students.lastOne());
// console.log(students.removeLast());
// console.log(students);

String.prototype.stars = function () {
  var result = "";
  for (var counter = 0; counter < this.length + 4; counter++) {
    result += "*";
  }

  result = `${result}\n* ${this} *\n${result}`;

  return result;
};
const user = "Elena (Ani lo mavina)";
// console.log(user.stars());

// const victims = [
//   "zeev",
//   "Igal",
//   "LOL",
//   "Daniesl",
//   "Matan",
//   "Elena Atzbanit",
//   "Shahar",
// ];
// victims.map((item) => console.log(item.stars()));

//function 2=>4 , 4=>16

Number.prototype.power2 = function () {
  return this * this;
};

console.log((5).power2());

//atzart 5!=>1*2*3*4*5

//number,string,boolean,array,object
//Number,String,Boolean,Array,Object

Number.prototype.atzaret = function () {
  var result = 1;
  for (counter = 2; counter <= this; counter++) {
    result *= counter;
  }
  return result;
};

String.prototype.lastName = function () {
  var result = this.split(" ");
  return result[result.length - 1];
};

// var kartzya = "ran tzioni the king";
// console.log(kartzya.lastName());

//zeev => z e e v

String.prototype.spaceMe = function () {
  var result = "";
  for (var counter = 0; counter < this.length; counter++) {
    result += this[counter] + " ";
  }
  return result;
};

var testMe = "ata kartzya";
//console.log(testMe.spaceMe());

String.prototype.spaceMeShir = function () {
  return this.split("").join(" ");
};

//console.log(testMe.spaceMeShir());

String.prototype.reverseMe = function () {
  var result = "";
  for (var counter = this.length - 1; counter >= 0; counter--) {
    result += this[counter];
  }

  return result;
};

String.prototype.revElena = function () {
  return this.split("").reverse().join("");
};

var ranTheKing = "רגע בפונקציה הראשונה שעשית, איפה אני רושם את זה?";
console.log(ranTheKing.revElena());

//var testRev = "ואז הזקנה התפצלה לשניים, ומתוכה יצא אור חזק של עבמים";
//console.log(testRev);
//console.log(testRev.reverseMe());

var hello = "שלום";
console.log(hello.reverseMe());
