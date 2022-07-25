require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employees");
const Scan = require("./routes/scan");
// const scanRoutes = require("./routes/scan");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
// app.use("/api/scan", scanRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/scan", Scan);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
