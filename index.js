const { Manager } = require("socket.io-client");
const settingPlayer = require("./player-controller");
const speakerController = require("./speaker-controller");
const SERVER_END_POINT = require("./SERVER");

const bsmTrackerManager = new Manager(SERVER_END_POINT, {
  transports: ["websocket"],
  autoConnect: false,
  reconnection: true,
});
const speakerSocket = bsmTrackerManager.socket("/speaker");
// const playerSocket = bsmTrackerManager.socket("/player");
speakerController(speakerSocket);
// settingPlayer(playerSocket);
