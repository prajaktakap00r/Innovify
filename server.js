// Require dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const morgan = require("morgan");

// Import routes
const jobRouter = require("./routes/jobRouter.js");

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "received", data: req.body });
});

// Use jobRouter for /api/v1/jobs route
app.use("/api/v1/jobs", jobRouter);

// 404 Not Found Middleware
app.use("*", (req, res) => {
  res.status(404).json({ msg: "NOT FOUND" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "Something Went Wrong" });
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
  connectToDB();
});
