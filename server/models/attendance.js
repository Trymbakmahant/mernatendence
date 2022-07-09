const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AttendanceSchema = new Schema(
  {
    objectID: {
      type: "String",
      required: true,
    },
    check: { type: "String", required: true },
  },

  { timestamp: true }
);

const Attendance = mongoose.model("Attendacne", AttendanceSchema);

module.exports = Attendance;
