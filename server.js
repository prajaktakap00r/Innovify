import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

// Import routers
import jobRouter from "./routers/jobRouter.js";

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

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
  res.json({ message: "Data received", data: req.body });
});
//GET AL JOBS
app.get("/api/v1/jobs");
//CREATE JOB
app.post("/api/v1/jobs");
//GET single JOBS
app.get("/api/v1/jobs/:id");
//EDIT JOB
app.patch("/api/v1/jobs/:id");

//DELETE JOB
app.delete("/api/v1/jobs/:id");

app.use("api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ msg: "something went wrong" });
});
// Connect to MongoDB
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

// Start server
const port = process.env.PORT || 5173;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
