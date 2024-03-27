//import * as dotenv from "dotenv";
const dotenv = require("dotenv");
dotenv.config();
//import express from "express" this statement will not work use the state below of commonJS
const express = require("express");
const app = express();

const morgan = require("morgan");

fetch("https://www.course-api.com/react-useReducer-cart-project")
  .then((res) => res.json())
  .then((data) => console.log(data));

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
//-Fetch API
//-Global await
//-watch mode  same as nodemon
