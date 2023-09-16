const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { exec } = require("shelljs");
const path = require("path");
const SERVER_END_POINT = require("./SERVER");

module.exports = async function settingPlayer(playerSocket) {
  let driver = null;
  const BROWSER_OPTIONS = new chrome.Options();
  BROWSER_OPTIONS.addArguments("--autoplay-policy=no-user-gesture-required");
  const BROWSER_PLATFORM = "chrome";

  exec(`/usr/bin/amixer -D pulse sset Master 100%`);

  playerSocket.on("connect", async () => {
    driver = new Builder();
    driver.forBrowser(BROWSER_PLATFORM);
    driver.setChromeOptions(BROWSER_OPTIONS);
    driver = await driver.build();
    const playerUrl = path.join(__dirname, "player.html");
    await driver.get(`file://${playerUrl}?server_url=${SERVER_END_POINT}`);
  });

  playerSocket.on("disconnect", async () => {
    if (driver) {
      await driver.quit();
    }
  });

  playerSocket.connect();
};
