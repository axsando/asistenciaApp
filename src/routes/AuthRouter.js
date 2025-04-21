import { Router } from "express";

const router = Router();

import AuthController from "../controllers/AuthController.js";

router.post("/", AuthController.postLogin);

export default router;