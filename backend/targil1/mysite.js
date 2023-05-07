var http = require("http");
var url = require("url");
const PORT = 8080;

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    let query = url.parse(request.url, true).query;
    //http://localhost:8080/?name=zeev&city=carmiel&lic=yes
    response.write(`
        <h1><center>Your information</center></h1><hr/>
        your name :${query.name}<br/>
        city : ${query.city}<br/>
        license : ${query.lic}<br/>
    `);
    response.end("<hr/>");
  })
  .listen(PORT);

console.log(`Server is running at url http://localhost:${PORT}`);
