// var FFplay = require("ffplay");
// const io = require("socket.io-client");
// const SERVER_END_POINT = "http://localhost:3000";
// const PLAYER_CONTROL_SK_ENDPOINT = SERVER_END_POINT + "/player";

// const socket = io(PLAYER_CONTROL_SK_ENDPOINT, {
//   transports: ["websocket"],
//   autoConnect: true,
//   reconnection: true,
// });

// socket.on("connect", (data) => {
//   console.log("connected");
// });

// let current = null;

// socket.on("play", async (data) => {
//   if (current) {
//     console.log("1");
//   }
//   console.log("2");
//   let src = "";
//   if (data.audio.AudioType === "local") {
//     src += SERVER_END_POINT;
//   }
//   src += data.src;
//   current = new FFplay(src);
// });

// socket.on("pause", async () => {
//   console.log("pause-1");
//   if (current) {
//     console.log("pause-2");
//     current.stop();
//     current = null;
//   }
// });

// socket.on("disconnect", () => {
//   if (current) {
//     current?.stop();
//     current = null;
//   }
// });

// socket.connect();
