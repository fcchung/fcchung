from flask import Flask
import json

app = Flask(__name__)


@app.route('/members')
def index():
    return json.dumps({"infos": ["info1", "info2", "info3"]})

if __name__ == "__main__":
    app.run(debug=True)