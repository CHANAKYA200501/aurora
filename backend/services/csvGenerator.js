const fs = require("fs");

function generateCSV(features, filePath) {
  const header = "NDVI,BSI,MAI\n";
  const rows = features
    .map(f => `${f.NDVI},${f.BSI},${f.MAI}`)
    .join("\n");

  fs.writeFileSync(filePath, header + rows);
}

module.exports = { generateCSV };