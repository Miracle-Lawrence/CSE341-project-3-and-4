const express = require("express");

const router = express.Router();

const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/students");

const validateStudent = require("../middleware/validator");

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - age
 *         - email
 *         - course
 *         - level
 *         - gender
 *         - cgpa
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         age:
 *           type: number
 *         email:
 *           type: string
 *         course:
 *           type: string
 *         level:
 *           type: string
 *         gender:
 *           type: string
 *         cgpa:
 *           type: number
 *       example:
 *         firstName: Miracle
 *         lastName: Lawrence
 *         age: 25
 *         email: miracle@gmail.com
 *         course: Software Development
 *         level: 400
 *         gender: Male
 *         cgpa: 4.5
 */

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     tags:
 *       - Students
 *     responses:
 *       200:
 *         description: List of all students
 *       500:
 *         description: Server error
 */
router.get("/", getStudents);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB student ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student found
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getStudentById);

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student
 *     tags:
 *       - Students
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", validateStudent, createStudent);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update a student
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB student ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.put("/:id", validateStudent, updateStudent);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB student ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", deleteStudent);

module.exports = router;
