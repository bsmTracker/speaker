const FFplay = require("ffplay");
const SERVER_END_POINT = require("./SERVER");

let current = null;

module.exports = (playerSocket) => {
  playerSocket.on("connect", () => {
    console.log("connected_player_controller");
  });
  playerSocket.on("play", async (data) => {
    console.log(SERVER_END_POINT);
    let src = "";
    if (data.audio.AudioType === "local") {
      src += SERVER_END_POINT;
    }
    src += data.src;
    current = new FFplay(src);
  });

  playerSocket.on("pause", async () => {
    if (current) {
      current.stop();
      current = null;
    }
  });

  playerSocket.on("disconnect", () => {
    if (current) {
      current?.stop();
      current = null;
    }
  });
};
