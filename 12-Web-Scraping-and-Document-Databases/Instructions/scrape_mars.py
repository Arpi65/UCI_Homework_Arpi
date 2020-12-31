# Dependencies
from bs4 import BeautifulSoup
import requests
from splinter import Browser
from webdriver_manager.chrome import ChromeDriverManager
#in order for the browser to fully load
import time
#define a function to open goofle chrome
def init_browser():
    executable_path = {'executable_path': ChromeDriverManager().install()}
    return Browser('chrome', **executable_path, headless=False)

#define function to scrape
def scrape():
    browser = init_browser()
    
    latest_article={}

    url = "https://mars.nasa.gov/news/"



    browser.visit(url)

    time.sleep(5)
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")

    

    latest_article["article_title"] = soup.find_all('div', class_="content_title")[1].text

    latest_article["article_content"] =soup.find_all('div',class_="article_teaser_body")[0].text
   
    return latest_article 


