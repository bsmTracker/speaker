// 음량 조절 및 스피커 on/off 제어 프로그램 //
const { exec } = require("child_process");
const { setPinCondition, setPin } = require("./gpio");
const RELAY_PIN = 26;

module.exports = (playerSocket) => {
  setPin(RELAY_PIN);
  playerSocket.on("connect", () => {
    playerSocket.emit("relay");
    console.log("connected_speaker_controller");
  });

  playerSocket.on("relay", async (data) => {
    if (data === false) {
      setPinCondition(RELAY_PIN, 0);
    } else {
      setPinCondition(RELAY_PIN, 1);
    }
  });
  playerSocket.connect();
};
