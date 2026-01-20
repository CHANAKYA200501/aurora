const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const sendGeoJSON = (file, res) => {
  const filePath = path.join(__dirname, "..", "data", file);

  if (!fs.existsSync(filePath)) {
    return res.status(500).json({ error: `${file} not found` });
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: `${file} invalid JSON`,
      details: err.message
    });
  }
};

router.get("/violations", (req, res) =>
  sendGeoJSON("violations.geojson", res)
);

router.get("/excavation", (req, res) =>
  sendGeoJSON("excavation.geojson", res)
);

router.get("/timeseries", (req, res) => {
  res.json([
    { date: "2024-01", area: 10 },
    { date: "2024-03", area: 18 },
    { date: "2024-06", area: 27 },
    { date: "2024-09", area: 35 },
    { date: "2024-12", area: 42 }
  ]);
});

module.exports = router;