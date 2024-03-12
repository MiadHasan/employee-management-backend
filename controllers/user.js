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

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  console.log(userId)
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const requestedUpdates = Object.keys(req.body);
  const allowedUpdates = ["firstName", "lastName", "phone", "isBlocked"];
  const isValidUpdate = requestedUpdates.every((item) =>
    allowedUpdates.includes(item),
  );

  if (!isValidUpdate) {
    return res.status(400).send("Invalid updates!");
  }
  const user = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, user, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(404).json(err);
  }
};