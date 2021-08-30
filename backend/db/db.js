const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CONNECTION, {
    });
    console.log("Connection with MongoDB: ON");
  } catch (e) {
    console.log("Error connecting to MongoDB: ", e);
  }
};

module.exports = { dbConnection };
