from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/healthmetrics', methods=['GET'])
def get_health_metrics():
    # Dummy data for health metrics
    health_metrics_data = {
        "exercise": "30 minutes",
        "waterIntake": 2.5,
        "healthIndex": 85
    }
    return jsonify(health_metrics_data)

if __name__ == '__main__':
    app.run(port=5000)
