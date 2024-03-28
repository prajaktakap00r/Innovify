//import * as dotenv from "dotenv";
const dotenv = require("dotenv");
dotenv.config();
//import express from "express" this statement will not work use the state below of COMMONJS
const express = require("express");

const app = express();
const morgan = require("morgan");
//simple import of nanoid is giving error

const { v4: uuidv4 } = require("uuid");
let jobs = [
  { id: uuidv4(), company: "apple", position: "front-end" },
  { id: uuidv4(), company: "google", position: "back-end" },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "received", data: req.body });
});

const port = process.env.PORT || 5173;

app.listen(port, () => {
  console.log(`server running on port ${port}....`);
});

//New Features
//-Fetch API //fetch api directly instead of using thunder client
//-Global await
//-watch mode  same as nodemon , setUp in package.json with name watch
