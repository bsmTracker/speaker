const { Manager } = require("socket.io-client");
const playerController = require("./player-controller");
const speakerController = require("./speaker-controller");

const SERVER_END_POINT = require("./SERVER");

const bsmTrackerManager = new Manager(SERVER_END_POINT, {
  transports: ["websocket"],
  autoConnect: true,
  reconnection: true,
});

const speakerSocket = bsmTrackerManager.socket("/speaker");
const playerSocket = bsmTrackerManager.socket("/player");

playerController(playerSocket);
speakerController(speakerSocket);
