var fs = require("fs");

// fs.appendFile("myResult.txt", "hello from node.js\n", (err) => {
//   if (err) {
//     console.log("we have an error:" + err);
//   } else {
//     console.log("file saved!");
//   }
// });

fs.readFile("myResult.txt", "utf8", (err, data) => {
  if (err) {
    console.log("we can not access the file");
    console.log("err: ", err);
    return;
  }
  console.log(data);
});
