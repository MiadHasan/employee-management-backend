import express from "express";
import {
  createUser,
  getUsers,
  deleteUser
} from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);

export default router;
