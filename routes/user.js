import express from "express";
import {
  createUser,
  getUsers,
  deleteUser,
  updateUser
} from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
