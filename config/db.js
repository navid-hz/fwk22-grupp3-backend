const mongoose = require("mongoose");

// MongoDB config to connect
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // Reading from .env file

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
