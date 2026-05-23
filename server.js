const express = require("express");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// CONNECT DATABASE
connectDB();

// MIDDLEWARE
app.use(express.json());

// ROUTES
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// SWAGGER DOCUMENTATION
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Student API Running...");
});

// START SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
