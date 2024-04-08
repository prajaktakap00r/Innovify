import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { validateInputRegister } from "../middleware/validationMiddleware.js";
const router = Router();

router.post("/register", validateInputRegister, register);
router.post("/login", login);
export default router;
