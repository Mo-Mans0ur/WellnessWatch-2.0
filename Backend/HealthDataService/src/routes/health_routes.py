from flask import Blueprint, request, jsonify
from services.health_service import HealthService

health_bp = Blueprint('health', __name__)
health_service = HealthService()

@health_bp.route('api/healthmetrics', methods=['GET'])
def get_health_metrics():
    metrics = health_service.get_health_metrics()
    return jsonify(metrics)

@health_bp.route('api/healthmetrics', methods=['POST'])
def add_health_metrics():
    data = request.json
    health_service.add_health_metrics(data)
    return jsonify({'message': 'Health metrics added successfully'}), 201