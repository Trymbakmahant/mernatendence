const router = require("express").Router();
const Attendance = require("../models/attendance");

router.route("/").post((req, res) => {
  console.log(req.body);

  const id = req.body.id;
  const date = new Date(Date.now()).toISOString();

  const attend = new Attendance({
    id,
    date,
  });
  attend
    .save()
    .then(res.json("completed"))
    .catch((err) => {
      console.log(err);
    });
});

router.route("/attend").get(async (req, res) => {
  const date1 = new Date(req.body.start);
  const date2 = new Date(req.body.end);

  const me = await Attendance.find({
    $and: [
      { id: req.body.id },
      { date: { $gt: req.body.start } },
      { date: { $lt: req.body.end } },
    ],
  });
  const days = (date2 - date1) / (1000 * 60 * 60 * 24) - 1;
  console.log(days); // it gives us the days btween the end and the starting date ;

  return res.json(me);
});

module.exports = router;
