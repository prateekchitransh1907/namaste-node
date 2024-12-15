Node JS Basics 
---------------

//A basic server using Node JS

const http = require("node:http");

const demoServer = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("Secret data!");
  }
  //reply to all users with a hello world!
  res.end("hello world!");
}); //returns an instance of the server
demoServer.listen(1991);

# Important Links

- https://github.com/nodejs/node
- https://expressjs.com/en/starter/installing.html
- https://astexplorer.net/
- https://nodejs.org/api/http.html
