var url = require("url");
const PORT = 4000;
const SPR =
  "======================================================================";
var urlAddress = `http://localhost:${PORT}/index.html?day=8&month=7&year=1974`;

var query = url.parse(urlAddress, true);
console.log(SPR);
console.log(urlAddress);
console.log(SPR);
console.log(query.host); //localhost:4000
console.log(SPR);
console.log(query.pathname); //index.html
console.log(SPR);
console.log(query.search); //?day=8&month=7&year=1974
console.log(SPR);
console.log(query.query);
console.log(SPR);
var obj = query.query; //turn the query into an object
console.log(obj.year); //get a single field from the object
console.log(SPR);
