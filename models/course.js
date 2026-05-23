const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },

    courseCode: {
      type: String,
      required: true,
    },

    instructor: {
      type: String,
      required: true,
    },

    units: {
      type: Number,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    semester: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Course", courseSchema);
