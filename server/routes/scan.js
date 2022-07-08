const router = require("express").Router();
const User = require("../models/user");
router.route("/").get((req, res) => {
  const id = req.body;
  console.log(id);
  User.findOne({ id })
    .then((object) => res.send(object))
    .catch((err) => res.status(400).json("Error :" + err));
  console.log(res.json);
});

module.exports = router;
