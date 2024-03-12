import User from "../models/user.js";

export const createUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json(err);
  }
};