const { body, validationResult } = require("express-validator");

const validateStudent = [
  body("firstName").notEmpty().withMessage("First name is required"),

  body("lastName").notEmpty().withMessage("Last name is required"),

  body("age").isNumeric().withMessage("Age must be a number"),

  body("email").isEmail().withMessage("Valid email is required"),

  body("course").notEmpty().withMessage("Course is required"),

  body("level").notEmpty().withMessage("Level is required"),

  body("gender").notEmpty().withMessage("Gender is required"),

  body("cgpa").isNumeric().withMessage("CGPA must be a number"),

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

module.exports = validateStudent;
