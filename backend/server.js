const express = require("express");
const cors = require("cors");

const geoRoutes = require("./routes/geo");
const analysisRoutes = require("./routes/analysis");

const app = express();
const PORT = 5002;

// ------------------ MIDDLEWARE ------------------
app.use(cors());
app.use(express.json());

// ------------------ HEALTH CHECK ------------------
app.get("/", (req, res) => {
  res.send("Aurora 2.0 Backend running");
});

// ------------------ REGISTER ROUTES ------------------

// Geo-spatial data routes
app.use("/api/geo", geoRoutes);

// Analysis & ML output routes
app.use("/api/analysis", analysisRoutes);

// ------------------ GLOBAL ERROR HANDLER (SAFE) ------------------
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    details: err.message
  });
});

// ------------------ START SERVER ------------------
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});