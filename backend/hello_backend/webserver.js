var http = require("http");
var httpPort = 8080;
var dt = require("./Functions/DateFunctions");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1><center>Age calculator</center></h1><hr/>");
    response.write(
      `Hello zeev, you born in <b><u>08/07/1974</u></b> and you are <b><u>${dt.myBday(
        "08/07/1974"
      )}</u></b> years old`
    );
    //response.end("<hr/><center>All rights reseved to class 92</center>");
    response.end("<hr/> your url: " + request.url);
  })
  .listen(httpPort);
console.log("web server: http://localhost:" + httpPort);
