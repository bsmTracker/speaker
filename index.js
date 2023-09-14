const { Manager } = require("socket.io-client");
// const playerController = require("./player-controller");
const speakerController = require("./speaker-controller");

const SERVER_END_POINT = require("./SERVER");
const open = require("opn");

const bsmTrackerManager = new Manager(SERVER_END_POINT, {
  transports: ["websocket"],
  autoConnect: false,
  reconnection: true,
});

const speakerSocket = bsmTrackerManager.socket("/speaker");
speakerController(speakerSocket);

open(SERVER_END_POINT + "/api/player");
