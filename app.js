import dotenv from "dotenv";
dotenv.config();

import dbConnect from "./config/database.js";
dbConnect()

import bcryptjs from "bcryptjs";
const {hash} = bcryptjs;

import express, { json } from "express";

import User from "./model/user.js";

const app = express();

app.use(json());

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

  const hashedPassword = await hash(password, 10);

  User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });
});

export default app;
