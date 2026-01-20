const { exec } = require("child_process");

function trainModel(csvPath, modelPath) {
  return new Promise((resolve) => {
    exec(
      `python python-ml/train_model.py ${csvPath} ${modelPath}`,
      () => resolve()
    );
  });
}

module.exports = { trainModel };