var http = require("http");
var httpPort = 8080;
//using our library
var dt = require("./Functions/DateFunctions");
//using system library
var url = require("url");
// http://localhost:8080/?year=1974
// react => localhost:8080/:year

/*
/29/08/2000
01234567890
 1        0
 */
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1><center>Age calculator</center></h1><hr/>");

    // response.write(
    //   `Hello zeev, you born in <b><u>${request.url.substring(
    //     1,
    //     request.url.length
    //   )}</u></b> and you are <b><u>${dt.myBday(request.url)}</u></b> years old`
    // );
    var query = url.parse(request.url, true).query;
    response.write(
      `Hello zeev, you born in <b><u>${
        query.year
      }</u></b> and you are <b><u>${dt.myBday(query.year)}</u></b> years old`
    );
    //response.end("<hr/><center>All rights reseved to class 92</center>");
    response.end("<hr/> your url: " + request.url);
  })
  .listen(httpPort);
console.log("web server: http://localhost:" + httpPort);
