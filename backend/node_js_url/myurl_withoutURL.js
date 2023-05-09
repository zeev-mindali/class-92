//var url = require("url");
const PORT = 4000;
const SPR =
  "======================================================================";
var urlAddress = `http:localhost:${PORT}/index.html?day=8&month=7&year=1974`;

console.log(urlAddress);
//result should be : 08/07/1974
console.log(SPR);

var onlyData = urlAddress.split("?")[1];
console.log(onlyData);
console.log(SPR);

var result = "";

//manipulation of string to get our result
onlyData.split("&").map((item) => {
  let myData = item.split("=")[1];
  result += myData.length < 2 ? `0${myData}` : myData;
  result += "/";
});
console.log(result.substring(0, result.length - 1));

//using an object to display our result
console.log(SPR);
var obj = new Object();
obj.day = onlyData.split("&")[0].split("=")[1];
obj.day = obj.day.length < 2 ? `0${obj.day}` : obj.day;
obj.month = onlyData.split("&")[1].split("=")[1];
obj.month = obj.month.length < 2 ? `0${obj.month}` : obj.month;
obj.year = onlyData.split("&")[2].split("=")[1];
obj.year = obj.year.substring(2, obj.year.length);
console.log(obj);
