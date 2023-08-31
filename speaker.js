// // 음량 조절 및 스피커 on/off 제어 프로그램 //
// const os = require("os");
// const io = require("socket.io-client");
// const { exec } = require("child_process");
// const osType = os.type();
// const RELAY = 26;
// // below ip is server ip
// const SERVER_END_POINT = "http://localhost:3000";
// const SPEAKER_CONTROL_SK_ENDPOINT = SERVER_END_POINT + "/speaker";
// if (osType !== "Linux") {
//   console.log(
//     "해당프로그램은 라즈베리파이OS 및 우분투와 같은 리눅스 기반에서 작동될 수 있습니다"
//   );
//   return;
// }

// function setVolume(volume) {
//   if (volume < 0 || volume > 100) return;
//   if (volume === 0) {
//     exec(`/usr/local/bin/gpio -g write ${RELAY} 0`);
//   } else {
//     exec(`/usr/local/bin/gpio -g write ${RELAY} 1`);
//   }
//   exec(`/usr/bin/amixer -D pulse sset Master ${volume}%`);
// }

// const socket = io(SPEAKER_CONTROL_SK_ENDPOINT, {
//   transports: ["websocket"],
//   autoConnect: true,
//   reconnection: true, // 재연결 시도 활성화
// });

// socket.on("connect", (data) => {
//   console.log("connected");
// });

// socket.on("disconnect", () => {
//   setVolume(0);
// });

// socket.on("volume", async (data) => {
//   const volume = Number(data);
//   setVolume(volume);
// });

// setVolume(0);
// exec(`/usr/local/bin/gpio -g mode ${RELAY} out`);
// socket.connect();
