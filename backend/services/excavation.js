const { exec } = require("child_process");

function detectExcavation(model, input, output) {
  return new Promise(resolve => {
    exec(
      `python python-ml/detect_excavation.py ${model} ${input} ${output}`,
      () => resolve()
    );
  });
}

module.exports = { detectExcavation };