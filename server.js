import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

// Import routers
import jobRouter from "./routers/jobRouter.js";
// Create Express app
const app = express();
// Load environment variables from .env file
dotenv.config();

// Middleware

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Additional route for receiving data
app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "Data received", jobs: req.body });
});

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});
// Connect to MongoDB
const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
