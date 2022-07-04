const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AttendanceSchema = new Schema(
  {
    objectID: {
      type: "string",
    },
  },

  { timestamp: true }
);

const Attendance = mongoose.model("Attendacne", AttendanceSchema);

module.exports = Attendance;
