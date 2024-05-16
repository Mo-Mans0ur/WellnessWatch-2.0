from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client.wellnesswatch

class HealthData:
    def __init__(self, exercise, water_intake, sleep, health_index):
        self.exercise = exercise
        self.water_intake = water_intake
        self.sleep = sleep
        self.health_index = health_index

        def save(self):
            health_data ={
                'exercise': self.exercise,
                'water_intake': self.water_intake,
                'sleep': self.sleep,
                'health_index': self.health_index
            }
            db.health_data.insert_one(health_data)