const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  adress: String,
  telephone: String,
  grade: String,
});

studentSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.String,
      password: this.String,
      adress: this.String,
      telephone: this.String,
      grade: this.String,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const student = mongoose.model("student", studentSchema);
module.exports = student;
