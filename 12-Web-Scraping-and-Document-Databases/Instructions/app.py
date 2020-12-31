from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
# pip install Flask-PyMongo
import scrape_mars

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/mars"
mongo = PyMongo(app)



@app.route("/")
def index():
    latest_article = mongo.db.latest_article
    return render_template("index.html", latest_article=latest_article)

@app.route("/scrape")
def scrape():
    latest_article = mongo.db.latest_article
    data = scrape_mars.scrape()
    latest_article.update({}, data, upsert=True)
    return redirect("/", code=302)












if __name__ == "__main__":
    app.run(debug=True)

