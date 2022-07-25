const router = require("express").Router();
const { User, validate } = require("../models/user");
const { Attendance } = require("../models/attendance");
const bcrypt = require("bcrypt");
const express = require("express");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const UserId = await new User({
      ...req.body,
      password: hashPassword,
    }).save();

    res.status(201).send({ message: UserId }); //message: "User created successfully"
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/scan", async (req, res) => {
  try {
    console.log(req.body);
    const ObjectId = req.body.id;
    const date = new Date(Date.now()).toISOString();
    // const attendance = await User.findOne({ _id: req.body.id });
    const check = await User.findOne({ _id: req.body.id });

    if (check) {
      const attendance = await new Attendance({
        objectId: ObjectId,

        Date: date,
      });

      attendance
        .save()
        .then(() => res.json("done"))
        .catch((err) => res.status(400).json(err));
    }

    res.json(attendance);
  } catch (error) {
    console.log(error);
  }
});

// User.find({}, function (err, users) {
//   if (err) console.warn(err);
//   console.warn(users);
// });

module.exports = router;
