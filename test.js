// 시도해봄
var spawn = require("child_process").spawn;

// 미디어 파일 경로 설정
var mediaFile =
  "https://rr7---sn-3u-20nk.googlevideo.com/videoplayback?expire=1693913096&ei=qLv2ZNaJF5uavcAPx9a7qAE&ip=211.182.230.53&id=o-AP32WBLP790Pbg7xGi-YdnOpltZ-hZKg7_UI7iXbb0iB&itag=251&source=youtube&requiressl=yes&mh=mB&mm=31%2C29&mn=sn-3u-20nk%2Csn-3u-bh2zs&ms=au%2Crdu&mv=m&mvi=7&pl=16&initcwndbps=3968750&spc=UWF9f0cxGlygKcyvHARrxHpumfuGOrk&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=853971&dur=47.161&lmt=1683826046226074&mt=1693891047&fvip=4&keepalive=yes&fexp=24007246&beids=24350017&c=ANDROID&txp=6318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgFNX0pAkVt7rY-CUGZBhwx_GmTISbp-kvokX0s_BNvCsCIQCFd40iD3ZuPDXG6_pa1tdVsDbWkMKwouNmmSUoVdWoQQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANsCmYb7KT8mCYfZM6mWMYZX9MHqinmrl0lnI4Pu_InDAiEAorrbTpaQPLxhbrO3_f-5RfgcUATnh_u_6oNlj8UlA1E%3D";

// ffplay 실행 명령
var startTime = "00:00:00";
var ffplayProcess = spawn("ffplay", [
  "-ss",
  startTime,
  mediaFile,
  "-nodisp",
  "-autoexit",
]);

// stdout 및 stderr 출력을 콘솔에 전달
ffplayProcess.stdout.pipe(process.stdout);
ffplayProcess.stderr.pipe(process.stderr);
ffplayProcess.on("close", function (code) {
  console.log("ffplay 프로세스 종료. 종료 코드:", code);
});

// var volumeLevel = 100; // 0부터 1까지의 값을 사용하여 볼륨 조절
// ffplayProcess.stdin.write("'volume=" + String(volumeLevel) + "'\n");

setTimeout(() => {
  var volumeLevel = 0.1; // 0부터 1까지의 값을 사용하여 볼륨 조절 (10%로 설정)
  console.log("볼륨을 10%로 설정합니다.");

  // Use the af audio filter option to adjust volume
  ffplayProcess.stdin.write("-af 'volume=" + String(volumeLevel) + "'\n");
}, 3000);
