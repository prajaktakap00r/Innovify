//import * as dotenv from "dotenv";
const dotenv = require("dotenv");
dotenv.config();
//import express from "express" this statement will not work use the state below of COMMONJS
const express = require("express");

const app = express();
const morgan = require("morgan");
//nanoid is giving error

//import jobRouter from "./routes/jobRouter.js";
// server.js
const jobRouter = require("./routes/jobRouter.js");

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

app.use("/api/v1/jobs", jobRouter);
app.use("*", (req, res) => {
  res.status(404).json({ msg: "NOT FOUND" });
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something Went Wrong" });
});
const port = process.env.PORT || 5173;

app.listen(port, () => {
  console.log(`server running on port ${port}....`);
});

//New Features
//-Fetch API //fetch api directly instead of using thunder client
//-Global await
//-watch mode  same as nodemon , setUp in package.json with name watch
