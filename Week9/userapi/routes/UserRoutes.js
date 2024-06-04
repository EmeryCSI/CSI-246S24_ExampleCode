//express has a router method
const express = require("express");
const router = express.Router();
//bring in the methods from my controller
const userController = require("../controllers/UserController");

//now we define our routes (endpoints)
router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);

//we export the router
module.exports = router;
