module.exports = function pwd(cmd) {
  if (cmd === "pwd") {
    process.stdout.write(process.cwd());
  }
  process.stdout.write("\nprompt > ");
};
