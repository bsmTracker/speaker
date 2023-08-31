// 음량 조절 및 스피커 on/off 제어 프로그램 //
const { exec } = require("child_process");
const { setPinCondition, setPin } = require("./gpio");
const RELAY_PIN = 26;

function setVolume(volume) {
  exec(`/usr/bin/amixer -D pulse sset Master ${volume}%`);
}

module.exports = (playerSocket) => {
  setPin(RELAY_PIN);
  setVolume(0);

  playerSocket.on("connect", () => {
    console.log("connected_speaker_controller");
  });

  playerSocket.on("disconnect", () => {
    setVolume(0);
  });

  playerSocket.on("volume", async (data) => {
    const volume = Number(data);
    if (volume < 0 || volume > 100) return;
    setVolume(volume);
    if (volume === 0) {
      setPinCondition(RELAY_PIN, 0);
    } else {
      setPinCondition(RELAY_PIN, 1);
    }
  });
};
