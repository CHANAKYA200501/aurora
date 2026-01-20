const turf = require("@turf/turf");

function checkViolation(excavation, noGo) {
  return turf.booleanIntersects(excavation, noGo);
}

module.exports = { checkViolation };