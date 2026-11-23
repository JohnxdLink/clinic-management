const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const db = require("./config/database.js");
const authRoutes = require("./routes/auth-routes.js");
const accountsRoutes = require("./routes/accounts-routes.js");
const healthFacilitiesRoutes = require("./routes/health_facilities-routes.js");
const medicalItemsRoutes = require("./routes/medical_items-routes.js");
const schoolYearRoutes = require("./routes/school_year-routes.js");

const app = express();

const PROJECT_ROOT = path.join(__dirname, "../..");

const allowedOrigins = [
  "http://127.0.0.1:5500",
  "http://localhost:5500",
  "http://127.0.0.1:3000",
  "http://localhost:3000",
];

// Helmet configuration
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],

        connectSrc: ["'self'", "http://localhost:3000", "http://127.0.0.1:3000"],

        styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],

        fontSrc: ["'self'", "data:", "https://cdnjs.cloudflare.com"],

        imgSrc: ["'self'", "data:", "https:"],

        scriptSrc: ["'self'"],
      },
    },
  }),
);

// CORS configuration
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(express.static(PROJECT_ROOT));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/api/health", (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    service: "backend",
    status: "online",
  });
});

app.get("/api/health/db", async (req, res) => {
  try {
    const [result] = await db.query("SELECT 1 AS connected");

    res.status(StatusCodes.OK).json({
      success: true,
      database: "online",
      result,
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      database: "offline",
      error: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
});

app.use("/api", authRoutes);
app.use("/api/accounts", accountsRoutes);
app.use("/api/health_facilities", healthFacilitiesRoutes);
app.use("/api/medical_items", medicalItemsRoutes);
app.use("/api/school_year", schoolYearRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(PROJECT_ROOT, "index.html"));
});

module.exports = app;
