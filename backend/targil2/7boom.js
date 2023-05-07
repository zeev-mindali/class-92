var myResult = "";
for (let counter = 1; counter <= 1000; counter++) {
  myResult += counter % 7 == 0 ? "boom" : counter;
  myResult += "\n";
}

var fs = require("fs");
fs.writeFile("result.7boom", myResult, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Done.");
  }
});
