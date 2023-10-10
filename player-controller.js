const puppeteer = require("puppeteer");
const { exec } = require("shelljs");
const path = require("path");
const SERVER_END_POINT = require("./SERVER");

let browser = null;

// executablePath: '/path/to/Chrome'
module.exports = async function settingPlayer(playerSocket) {
  exec(`/usr/bin/amixer -D pulse sset Master 100%`);

  playerSocket.on("connect", async () => {
    if (browser) {
      await browser.close();
    }
    const playerUrl = path.join(__dirname, "player.html");
    browser = await puppeteer.launch({
      headless: false,
      executablePath: "/path/to/Chrome",
      args: ["--autoplay-policy=no-user-gesture-required"],
    });
    const page = await browser.newPage();
    page.goto(`file://${playerUrl}?server_url=${SERVER_END_POINT}`);
  });

  playerSocket.on("disconnect", async () => {
    if (browser) {
      await browser.close();
    }
    browser = null;
  });

  playerSocket.connect();
};
