var http = require("http");
var httpPort = 8080;
var dt = require("./Functions/DateFunctions");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(
      `Hello zeev, you born in 08/07/1974 and you are ${dt.myBday(
        "08/07/1974"
      )} years old`
    );
  })
  .listen(httpPort);
console.log("web server: http://localhost:" + httpPort);
