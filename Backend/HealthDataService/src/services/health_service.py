from models.health_data import HealthData

class HealthService:
    def get_health_metrics(self):
        # dummy data
        return {
            'exercise': 30,
            'water_intake': 3,
            'sleep': 8,
            'health_index': 80
        }
    
    def add_health_metrics(self, data):
        health_data = HealthData(
            exercise=data['exercise'],
            water_intake=data['water_intake'],
            sleep=data['sleep'],
            health_index=data['health_index']
        )
        health_data.save()