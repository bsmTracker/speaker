const { exec } = require("child_process");

function setPin(pin) {
  exec(`/usr/local/bin/gpio -g mode ${pin} out`);
}

function setPinCondition(pin, condition) {
  if (condition !== 1 || condition !== 0) {
    return;
  }
  exec(`/usr/local/bin/gpio -g write ${pin} ${condition}`);
}

module.exports = {
  setPin,
  setPinCondition,
};
