var http = require("http");
var fileSystem = require("fs");
const PORT = 8080;

http
  .createServer((request, response) => {
    fileSystem.readFile("index.html", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    });
  })
  .listen(PORT);

console.log(`server is running at address http://localhost:${PORT}`);
