const { exec } = require("child_process");

function setPin(pin) {
  console.log(pin);
  exec(`/usr/local/bin/gpio -g mode ${pin} out`);
}

function setPinCondition(pin, condition) {
  console.log(pin, condition);
  exec(`/usr/local/bin/gpio -g write ${pin} ${condition}`);
}

module.exports = {
  setPin,
  setPinCondition,
};
