const bcrypt = require("bcrypt");
const Student = require("../models/student");
const mongoose = require("mongoose");

const registerStudent = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password || !req.body.adress || !req.body.telephone || !req.body.grade)
    return res.status(400).send("Incomplete data");

  let existingStudent = await Student.findOne({ email: req.body.email });
  if (existingStudent)
    return res.status(400).send("The Student is already registered");

  let hash = await bcrypt.hash(req.body.password, 10);

  let student = new Student({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    adress: req.body.adress,
    telephone: req.body.telephone,
    grade: req.body.grade
  });

  let result = await student.save();
  if (!result) return res.status(400).send("Failed to register Student");
  try {
    let jwtToken = student.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

const listStudent = async (req, res) => {
  let students = await Student.find({ name: new RegExp(req.params["name"], "i") });
  if (!students || students.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send({ students });
};

module.exports = {
  registerStudent,
  listStudent,
};