import { Router } from "express";

const router = Router();

import { login, logout } from "../controllers/LoginController.js";

router.get("/", login)
router.get("/logout", logout)

export default router;