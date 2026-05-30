const express = require("express");

const router = express.Router();

const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

const validateCourse = require("../middleware/courseValidator");

const isAuthenticated = require("../middleware/authenticate");

/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - courseName
 *         - courseCode
 *         - instructor
 *         - units
 *         - department
 *         - semester
 *         - level
 *       properties:
 *         courseName:
 *           type: string
 *         courseCode:
 *           type: string
 *         instructor:
 *           type: string
 *         units:
 *           type: number
 *         department:
 *           type: string
 *         semester:
 *           type: string
 *         level:
 *           type: string
 *       example:
 *         courseName: Web Development
 *         courseCode: CSC401
 *         instructor: Dr John
 *         units: 3
 *         department: Computer Science
 *         semester: First Semester
 *         level: 400
 */

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     tags:
 *       - Courses
 *     responses:
 *       200:
 *         description: List of courses
 */
router.get("/", getCourses);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get course by ID
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Course found
 */
router.get("/:id", getCourseById);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a course
 *     tags:
 *       - Courses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: Course created
 */
router.post("/", isAuthenticated, validateCourse, createCourse);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a course
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated
 */
router.put("/:id", isAuthenticated, validateCourse, updateCourse);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Course deleted
 */
router.delete("/:id", isAuthenticated, deleteCourse);

module.exports = router;
