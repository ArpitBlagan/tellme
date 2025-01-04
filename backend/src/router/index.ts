import { Router } from "express";
import { VerifyJWT } from "../middleware";

export const router = Router();

router.route("/register");
router.route("/login");
router.use(VerifyJWT);
