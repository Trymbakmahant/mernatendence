const mongoose = require("mongoose");

const attendance = new mongoose.Schema({
  taskname: { type: String, required: true },
  date: { type: String, required: true },
  
});

const Attendance = mongoose.model("Attendance", attendance);
module.exports = Attendance;
