//this controller handles all requests for users

//pull in the user model we create
const User = require("../models/User");

//lets make a function that returns all users in the database
const getAllUsers = async (req, res) => {
  console.log("test");
  try {
    //get all users from the model
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//lets make an endpoint that creates a user
const createUser = async (req, res) => {
  //create a new user from the body
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllUsers, createUser };
