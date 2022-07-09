const router = require("express").Router();
const { User, validate } = require("../models/user");
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

router.post("/scan", (req, res) => {
  try {
    const attendance = User.findOne({ _id: req.body.id });
    if (attendance) {
      console.log(attendance);
    }
  } catch (error) {
    console.log(error);
  }
});

// User.find({}, function (err, users) {
//   if (err) console.warn(err);
//   console.warn(users);
// });

module.exports = router;
