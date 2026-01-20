const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          type: "No-Go Violation",
          area: "1.2 ha"
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [78.95, 23.52],
              [78.97, 23.52],
              [78.97, 23.54],
              [78.95, 23.54],
              [78.95, 23.52]
            ]
          ]
        }
      }
    ]
  });
});

module.exports = router;