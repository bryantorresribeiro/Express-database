import { Router } from "express";

const router = Router();

import createUserController from "../controlllers/createUser.controller";
import listUserController from "../controlllers/listUser.controller";

router.post("/users/signup", createUserController);
router.get("/users", listUserController);

export default router;