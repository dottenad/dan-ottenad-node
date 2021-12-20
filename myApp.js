var express = require('express');
var app = express();
require('dotenv').config();
const message = {"message": "Hello json"};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));


if (process.env.MESSAGE_STYLE=="uppercase"){
  app.get("/json", function(req, res) {
    return res.json({ "message": "HELLO JSON" })
  });
} 
else {
  app.get("/json", function(req, res) {
    return res.json({ "message": "Hello json" })
  });
}





























 module.exports = app;
