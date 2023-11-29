const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dhia:dhia123@cluster0.mdiasnp.mongodb.net/shopOnligne"
    );
    console.log("database connected");
  } catch (error) {
    console.log("errr", error);
  }
};

module.exports = connectDB;
