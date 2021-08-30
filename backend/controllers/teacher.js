const bcrypt = require("bcrypt");
const Teacher = require("../models/teacher");
const mongoose = require("mongoose");

const registerTeacher = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password || !req.body.adress || !req.body.telephone || !req.body.city || !req.body.topic )
    return res.status(400).send("Incomplete data");

  let existingTeacher = await Teacher.findOne({ email: req.body.email });
  if (existingTeacher)
    return res.status(400).send("The Teacher is already registered");

  let hash = await bcrypt.hash(req.body.password, 10);

  let teacher = new Teacher({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    adress: req.body.adress,
    telephone: req.body.telephone,
    city: req.body.city,
    topic: req.body.topic,

  });

  let result = await teacher.save();
  if (!result) return res.status(400).send("Failed to register teacher");
  try {
    let jwtToken = teacher.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

const listTeacher = async (req, res) => {
  let teachers = await Teacher.find({ name: new RegExp(req.params["name"], "i") });
  if (!teachers || teachers.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send({ teachers });
};

module.exports = {
  registerTeacher,
  listTeacher,
};