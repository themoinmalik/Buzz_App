// const dotenv = require('dotenv');

require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));
  