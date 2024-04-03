import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
// Import routers
import jobRouter from "./routers/jobRouter.js";
import { body, validationResult } from "express-validator";

// Middleware
import errorHandleMiddleware from "./middleware/errorHandlerMiddleware.js";

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

app.post(
  "/api/v1/test",
  [
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isLength({ min: 50 })
      .withMessage("name must be at least of length 50"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }
    next();
  },
  (req, res) => {
    const { name } = req.body;
    res.json({ msg: `hello ${name}` });
  }
);

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandleMiddleware);

// Connect to MongoDB
const port = process.env.PORT || 5200;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
