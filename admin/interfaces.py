from abc import ABC, abstractmethod
import openai
# import google.generativeai as genai

class RoadmapGeneration(ABC):
    @abstractmethod
    def generateRoadmap(self, objective, salary):
        pass
