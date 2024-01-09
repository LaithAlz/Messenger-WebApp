const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://laith:laith1@cluster0.jsqzrcu.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`DB connected: ${conn.connection.host}`);
  } catch (error) {
    process.exit();
  }
};

module.exports = connectDB;
