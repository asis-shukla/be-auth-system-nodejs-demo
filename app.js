require("dotenv").config();
require("./config/database").connect();

const bcryptjs = require("bcryptjs");
const express = require("express");

const User = require("./model/user");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> Hello from Ashish! </h1>");
});

app.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!(firstname && lastname && email && password)) {
    res.status(400).send("All fields are mandatory");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(301).send("User already registered");
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });
});

module.exports = app;
