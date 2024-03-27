//import express from "express" this statement will not work use the state below of commonJS
const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "received", data: req.body });
});
app.listen(5173, () => {
  console.log("server running....");
});
