const { exec } = require("child_process");

function runPython(script, args = []) {
  return new Promise((resolve, reject) => {
    const command = `python3 ${script} ${args.join(" ")}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}

module.exports = { runPython };
