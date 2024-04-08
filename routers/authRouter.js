import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import {
  validateInputLogin,
  validateInputRegister,
} from "../middleware/validationMiddleware.js";
const router = Router();

router.post("/register", validateInputRegister, register);
router.post("/login", validateInputLogin, login);
export default router;
