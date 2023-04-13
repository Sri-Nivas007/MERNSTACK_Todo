const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGODB_URL;


const MongoDBConnect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Error Connecting to MongoDB");
    throw new Error(err);
  }
};

module.exports = MongoDBConnect;
