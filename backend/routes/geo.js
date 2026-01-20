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

router.get("/mines", (req, res) =>
  sendGeoJSON("mines.geojson", res)
);

router.get("/nogo", (req, res) =>
  sendGeoJSON("nogo.geojson", res)
);

module.exports = router;