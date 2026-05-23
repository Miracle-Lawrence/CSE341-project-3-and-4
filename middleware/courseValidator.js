const { body, validationResult } = require("express-validator");

const validateCourse = [
  body("courseName").notEmpty().withMessage("Course name is required"),

  body("courseCode").notEmpty().withMessage("Course code is required"),

  body("instructor").notEmpty().withMessage("Instructor is required"),

  body("units").isNumeric().withMessage("Units must be a number"),

  body("department").notEmpty().withMessage("Department is required"),

  body("semester").notEmpty().withMessage("Semester is required"),

  body("level").notEmpty().withMessage("Level is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    next();
  },
];

module.exports = validateCourse;
