import { Router } from "express";
import { VerifyJWT } from "../middleware";
import { findUsers, searchUsers } from "../controllers";
export const router = Router();

router.route("/register");
router.route("/login");
router.use(VerifyJWT);
//find friends according to hobbies of a particular user's hobbies
router.route("/users/:id").get(findUsers);
router.route("/search").get(searchUsers);
