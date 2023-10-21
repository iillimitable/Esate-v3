import User from "../model/model.user.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 11);
  const newuser = new User({ username, email, password: hashPassword });

  try {
    await newuser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
