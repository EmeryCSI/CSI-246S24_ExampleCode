//bring in .env
require("dotenv").config();
//bring in mongoose
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");

const PORT = 5001;
//pulled the connection string from .env
const CONNECTION_STRING = process.env.CONNECTION_STRING;

//connect to mongodb using mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

//create app from express
const app = express();

//these are middleware
//middleware are methods that run on every requests
app.use(express.json());
app.use(cors());

//define endpoints
app.get("/", (req, res) => {
  res.send("Hello Nodemon");
});

//if a request comes into /user send them to the userRoutes
app.use("/user", userRoutes);
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
