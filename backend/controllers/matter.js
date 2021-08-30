const bcrypt = require("bcrypt");
const Matter = require("../models/matter");
const mongoose = require("mongoose");
const Teacher = require("../models/teacher");

const registerMatter = async (req, res) => {
  if (!req.body.name || !req.body.numberHours)
    return res.status(400).send("Incomplete data");

  let existingMatter = await Matter.findOne({ name: req.body.name });
  if (existingMatter)
    return res.status(400).send("The matter is already registered");

  let teacher = await Teacher.findOne({ name: "Alberto" });
  if (!teacher) return res.status(400).send("No teacher was assigned");

  let matter = new Matter({
    name: req.body.name,
    teacharId: teacher._id,
    numberHours: req.body.numberHours,
  });

  let result = await matter.save();
  if (!result) return res.status(400).send("Failed to register matter");
  return res.status(200).send({ result });
};

const listMatter = async (req, res) => {
  let matters = await Matter.find({
    name: new RegExp(req.params["name"], "i"),
  });
  if (!matters || matters.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send({ matters });
};

module.exports = {
  registerMatter,
  listMatter,
};
