const FFplay = require("ffplay");
const SERVER_END_POINT = require("./SERVER");
const { exec } = require("shelljs");
const ffmpeg = require("ffmpeg");

let current = null;

function setVolume(volume) {
  if (volume < 0 || volume > 100) return;
  exec(`/usr/bin/amixer -D pulse sset Master ${volume}%`);
}

module.exports = (playerSocket) => {
  playerSocket.on("play", async (data) => {
    let src = "";
    if (data.audio.AudioType === "local") {
      src += SERVER_END_POINT;
    }
    src += data.src;
    const startTimeMs = data.startTime || 0;
    current = new FFplay(src, [`-ss`, startTimeMs / 1000]);
  });

  playerSocket.on("pause", async () => {
    if (current) {
      current.pause();
      current.stop();
      current = null;
    }
  });
  playerSocket.on("volume", async (volume) => {
    setVolume(volume);
  });

  playerSocket.on("disconnect", () => {
    if (current) {
      current?.pause();
      current?.stop();
      current = null;
    }
  });
  playerSocket.connect();
};
