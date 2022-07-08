const router = require("express").Router();
const { User } = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const listofempoyees = await User.find().populate("_id", "name");
    //  const { firstname, lastname } = listofempoyees;
    // console.log(listofempoyees);
    return res.json(listofempoyees);
  } catch (err) {
    console.error(err);
  }
});

router.get("/me", async (req, res) => {
  try {
    const me = await User.findOne().populate("_id");
    return res.json(me);
  } catch (err) {
    console.error(err);
  }
});

// router.get("/:id", (req, res) => {
//   console.log(req.params.id);
// });

module.exports = router;
