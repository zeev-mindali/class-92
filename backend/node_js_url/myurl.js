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
