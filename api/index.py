# flask imports
from flask import Flask, jsonify, request
from flask_cors import CORS # to call from other servers

# import items from messenger.py
from messenger import *

app = Flask(__name__)
CORS(app) # allow localhost:3000 to call the api

@app.route("/api/python/generate", methods=['POST']) # post request
def generate(): # TODO: doesn't route correctly on production, inspect on website and look at console for more
    prompt = request.json['prompt']
    response_text = openai.ChatCompletion.create(
        model='gpt-3.5-turbo',
        messages=[{"role": "user", "content": prompt}],
        temperature=2.0,
        max_tokens=300,
    )['choices'][0]['message']['content']
    print(response_text)
    return jsonify({
        'quote': response_text
    })

if __name__ == '__main__':
    app.run(port=8080) # remove debug mode in production