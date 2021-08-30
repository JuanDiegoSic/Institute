const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const matterSchema = new mongoose.Schema({
  name: String,
  teacherId: { type: mongoose.Schema.ObjectId, ref: "teacher" },
  numberHours : String,

});

const matter = mongoose.model("matter", matterSchema);
module.exports = matter;
