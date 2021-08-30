const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const teacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  adress: String,
  telephone: String,
  city: String,
  topic: String,
});

teacherSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.String,
      password: this.String,
      adress: this.String,
      telephone: this.String,
      city: this.String,
      topic: this.String,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const teacher = mongoose.model("teacher", teacherSchema);
module.exports = teacher;
