const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const run = async () => {
  let options = new chrome.Options().addArguments(
    "--autoplay-policy=no-user-gesture-required"
  );
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
  await driver.get(
    "file:///Users/donghyeon/Documents/%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B4/templates/player.html"
  );
};
run();
