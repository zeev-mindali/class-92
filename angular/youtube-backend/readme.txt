for using express with it's all sub modules we need the following command
npm install express body-parser cors @types/express-fileupload @types/morgan loadsh 

express
========
Popular web framework on top of node.js, ew shell use it for developement of REST API.

body-parser
===========
node.js request body parsing middleware parses the incoming request body before we will handle
and makes it avaiable under the 'request.body' in shor , simplifies incoming request..

{data:{name: "zeev"}}=>middleware=>{name:"zeev"}=>

cors
=============
another express middleware for enabling CORS (Cross Origin Resource Shering) requests.

express-fileupload
=======================
simple express middleware for upload files, it parses 'multipart/from-data' requests.
extracts the files if avaiable, and makes them avaiable under req.files property.

morgan (Yorgan)
================
node.js middlware for logging http requests

loadash
================
javascript library that provides utility functions for arrays,numbers,objects,string,etc....


