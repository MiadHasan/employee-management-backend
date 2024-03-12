import express from "express";
import {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserById
} from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.get("/:id", getUserById);

export default router;
