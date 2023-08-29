const os = require("os");
const io = require("socket.io-client");
const {exec} = require('child_process');
const osType = os.type();
const RELAY = 26;
// below ip is server ip
const SERVER_END_POINT = "http://localhost:3000";
const PLAYER_CONTROL_ENDPOINT = SERVER_END_POINT + "/api/player";
const SPEAKER_CONTROL_SK_ENDPOINT = SERVER_END_POINT + "/speaker";

console.log(osType);

if (osType !== "Linux") {
  console.log(
    "해당프로그램은 라즈베리파이OS 및 우분투와 같은 리눅스 기반에서 작동될 수 있습니다"
  );
  return;
}


function setVolume(volume) {
  if (volume < 0 || volume > 100) return;
    if (volume === 0) {
    	exec(`/usr/local/bin/gpio -g write ${RELAY} 0`);
  } else {
    	exec(`/usr/local/bin/gpio -g write ${RELAY} 1`);
  }
  exec(`/usr/bin/amixer -D pulse sset Master ${volume}%`);
}

const socket = io(SPEAKER_CONTROL_SK_ENDPOINT, {
  transports: ["websocket"],
  autoConnect : false
});

let reconnectInterval = null;
socket.on("connect_error", (error) => {
if(!reconnectInterval) {
reconnectInterval = setInterval(() => {
socket.connect();
console.log("CONNECTING TO SERVER...");
}, 3000);
}
});

socket.on("connect", (data) => {
console.log("connected");
	if(reconnectInterval) {
		exec(`/usr/bin/firefox ${PLAYER_CONTROL_ENDPOINT}`);
		clearInterval(reconnectInterval)
	}
});

socket.on("disconnect", () => {
socket.connect()
})

socket.on("volume", async (data) => {
  const volume = Number(data);
  console.log(volume);
  setVolume(volume);
});

setVolume(0);
socket.connect();
///usr/bin/firefox
exec(`/usr/local/bin/gpio -g mode ${RELAY} out`);
