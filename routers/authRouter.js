import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  validateInputLogin,
  validateInputRegister,
} from "../middleware/validationMiddleware.js";
import rateLimit from "express-rate-limit";
const router = Router();
const apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 3,
  message: { msg: "IP rate limit exceeded,retry in 10 minutes" },
});
router.post("/register", apiLimiter, validateInputRegister, register);
router.post("/login", apiLimiter, validateInputLogin, login);
router.get("/logout", logout);
export default router;
