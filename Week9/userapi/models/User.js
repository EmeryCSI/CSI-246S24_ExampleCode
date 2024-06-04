//a model is just a javascript blueprint for an entry in a database
const mongoose = require("mongoose");

//We define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
