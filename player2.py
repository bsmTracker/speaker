from selenium import webdriver

width = 800
height = 600
chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)
chrome_options.add_argument("--autoplay-policy=no-user-gesture-required")
driver = webdriver.Chrome(options=chrome_options)
driver.set_window_size(width, height)
driver.get("http://localhost:8080/api/player")
