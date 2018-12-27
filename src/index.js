var http = require("http");
var express = require("express");
const app = express();

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

app.get("/", function(req, res) {
  res.send("Hello");
});
