const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const courseSchema = new mongoose.Schema({
  name: String,
  numberStudent : String,
  schedule : String,

});

const course = mongoose.model("course", courseSchema);
module.exports = course;
