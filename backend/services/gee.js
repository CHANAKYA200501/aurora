const axios = require("axios");

async function fetchSentinel2(aoi, start, end) {
  // In hackathon: simulate or pre-export GEE data
  return {
    date: "2025-06",
    ndvi: Math.random(),
    swir: Math.random()
  };
}

module.exports = { fetchSentinel2 };