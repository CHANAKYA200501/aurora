const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "mines.geojson");
  const mines = JSON.parse(fs.readFileSync(filePath));
  res.json(mines);
});

module.exports = router;