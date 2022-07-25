const router = require("express").Router();

// import { Attendance } from "../models/attendance";

router.route("/").post((req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
