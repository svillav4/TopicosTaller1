from abc import ABC, abstractmethod

class RoadmapGeneration(ABC):
    @abstractmethod
    def generateRoadmap(self, objective, salary):
        pass
