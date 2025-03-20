// Importing required packages
import express from "express"; // Express framework
import morgan from "morgan"; // Logger middleware for HTTP requests
import colors from "colors"; // For colored console logs
import dotenv from "dotenv"; // To load environment variables

// Importing DB connection file
import dbConnection from "./config/db.config.js";

// Importing route files
import listSchoolRouter from "./routes/listSchool.js";
import addSchoolRouter from "./routes/addSchool.js";

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

//========================= Middleware Setup ==========================
// HTTP request logger middleware
app.use(morgan("dev"));

// Middleware to parse JSON data from requests
app.use(express.json());

// ========================== API Routes ==============================
// Add School route
app.use("/api/v1", addSchoolRouter);

// List Schools route
app.use("/api/v1", listSchoolRouter);

// Root route (home route)
app.get("/", (req, res) => {
  return res.status(200).send("Home Route");
});

// ======================= Server and DB Setup =======================

// Define the port to run the server
const PORT = process.env.PORT || 8000;

// Test DB connection before starting the server
dbConnection
  .query("SELECT 1") // Just a test query to check DB connection
  .then(() => {
    console.log("Db connected".bgBrightGreen);

    // Start the server after successful DB connection
    app.listen(PORT, () => {
      console.log(
        colors.bgBrightYellow(`server is running on http://localhost:${PORT}`)
      );
    });
  })
  .catch((error) => {
    console.log("db connection failed", error);
  });
