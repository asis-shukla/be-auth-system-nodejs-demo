const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Hello from Ashish! </h1>");
});

module.exports = app;
