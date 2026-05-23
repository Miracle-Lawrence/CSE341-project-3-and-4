const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    course: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    cgpa: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Student", studentSchema);
