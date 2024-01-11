const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { generateToken } = require("../generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (name === "" || email === "" || password === "") {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

const changePassword = asyncHandler(async (req,res) => {
  const {userId, oldPassword, newPassword} = req.body
  if(!oldPassword || !newPassword){
    res.status(400)
    throw new Error("Please provide old and new password")
  }

  const user = await User.findById(userId)
  if(!user){
    res.status(404)
    throw new Error("user not found")
  }

  if(!(await user.matchPassword(oldPassword))){
    res.status(401)
    throw new Error("Incorrect old password")
  }

  user.password = newPassword;
  await user.save();

  res.status(200).json({ message: "Password changed successfully" });


})

module.exports = { registerUser, authUser, allUsers, changePassword };
