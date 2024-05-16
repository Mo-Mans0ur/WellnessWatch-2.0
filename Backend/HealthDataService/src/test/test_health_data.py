import unittest

from src.services.health_service import HealthService

class TestHealthService(unittest.TestCase):
    def setUp(self):
        self.health_service = HealthService()
    
    def test_get_health_metrics(self):
        metrics = self.health_service.get_health_metrics()
        self.assertIn(metrics['exercise'], metrics)
        self.assertIn(metrics['water_intake'], metrics)
        self.assertIn(metrics['sleep'], metrics)
        self.assertIn(metrics['health_index'], metrics)
    
    def test_add_health_metrics(self):
        data = {
            'exercise': 30,
            'water_intake': 3,
            'sleep': 8,
            'health_index': 80
        }
        self.health_service.add_health_metrics(data)
        metrics = self.health_service.get_health_metrics()
        self.assertEqual(metrics['exercise'], 30)
        self.assertEqual(metrics['water_intake'], 3)
        self.assertEqual(metrics['sleep'], 8)
        self.assertEqual(metrics['health_index'], 80)