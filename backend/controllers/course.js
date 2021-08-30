const bcrypt = require("bcrypt");
const Course = require("../models/course");
const mongoose = require("mongoose");

const registerCourse = async (req, res) => {
  if (!req.body.name || !req.body.numberStudent || !req.body.schedule)
    return res.status(400).send("Incomplete data");

  let existingCourse = await Course.findOne({ name: req.body.name });
  if (existingCourse)
    return res.status(400).send("The course is already registered");

  let course = new Course({
    name: req.body.name,
    numberStudent: req.body.numberStudent,
    schedule: req.body.schedule,
  });

  let result = await course.save();
  if (!result) return res.status(400).send("Failed to register course");
  return res.status(200).send({ result });
};

const listCourse = async (req, res) => {
  let courses = await Course.find({
    name: new RegExp(req.params["name"], "i"),
  });
  if (!courses || courses.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send({ courses });
};

module.exports = {
    registerCourse,
    listCourse,
};
