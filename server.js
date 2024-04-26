import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
// Import routers
import jobRouter from "./routers/jobRouter.js";
import authRouter from "./routers/authRouter.js";
import userRouter from "./routers/userRouter.js";
//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
// Middleware
import errorHandleMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

// Create Express app
const app = express();
// Load environment variables from .env file
dotenv.config();

// Middleware
const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Additional route for receiving data
app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});
app.post("/api/v1/test", (req, res) => {
  const { name } = req.body;
  res.json({ msg: `hello ${name}` });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

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
