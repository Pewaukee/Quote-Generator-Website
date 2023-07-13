from flask import Flask, jsonify
from flask_cors import CORS # to call from other servers

app = Flask(__name__)
CORS(app)

@app.route("/api/python", methods=['GET'])
def hello_world():
    return jsonify({
        'message': 'Bing bop, I am a bot'
    })

if __name__ == '__main__':
    app.run(debug=True, port=8080) # remove debug mode in production