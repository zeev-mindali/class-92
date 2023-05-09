var http = require("http");
var url = require("url");
var fs = require("fs");
const PORT = 4000;

//create our web server
http
  .createServer((request, response) => {
    //get the query object
    let query = url.parse(request.url, true);
    //get the path name
    //let myPath = "." + query.path;
    let myPath = "html" + query.path;
    console.log(myPath);
    fs.readFile(myPath, (err, data) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        return response.end("404 page not found");
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    });
  })
  .listen(PORT);

console.log("web server is running at address http://localhost:" + PORT);
