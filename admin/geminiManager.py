import json
from django.conf import settings
from .interfaces import RoadmapGeneration
import google.generativeai as genai


class GeminiAIProvider(RoadmapGeneration):
    def __init__(self):
        gemini_api_key = settings.KEYS.get('GEMINI_API_KEY')


        if gemini_api_key:
            genai.configure(api_key=gemini_api_key)
            self.gemini_model = genai.GenerativeModel('gemini-2.0-flash')
        else:
            self.gemini_model = None
            print("Warning: GEMINI_API_KEY not found in settings. Gemini functionality will be limited.")


    def generateRoadmap(self, objective, salary):
        if not self.gemini_model:
            return {"error": "Gemini API key is not configured."}

        content = f"""Imagine you're an experienced recruiter. You're requested to build a 5 steps, self-study roadmap to be a {objective}. For each step of the roadmap, bring recommendations on how to expand the topic you're suggesting and some material you can provide. Ensure that each step you bring is planned learn something towards the desired objective. Focus only in courses I can do from home, online. Also, provide a job I might apply for after completing each step. Justify how this roadmap will benefy me on my professional career and finally, after making an analysis, say if {salary} dollars a year as expected salary is a good estimation, or either to high or to low considering the level that can be achieved with this roadmap.

Bring your answer in the following json format:
name: -what I want to become-.,
steps: array of steps in the following format:
-number: step number,
-name: step name,
-remarkablePoints: array of exactly 3 remarkable points,
-recommendedMaterials: array of recommended materials with the title of each without url, and
-jobSuggestion: job suggestion as an object with: title and description.
benefit: How this roadmap benefit me.
salary: string with your opinion of my salary expectations.
Do not add endline dot at the end of the name.
Bring your response on the given format as a pure json format."""

        try:
            response = self.gemini_model.generate_content(content)
            json_string = response.text
            # Gemini might return extra text, so try to find the JSON part
            start_index = json_string.find('{')
            end_index = json_string.rfind('}') + 1
            if start_index != -1 and end_index > start_index:
                return json.loads(json_string[start_index:end_index])
            else:
                return {"error": "Could not parse JSON response from Gemini.", "raw_response": json_string}
        except Exception as e:
            return {"error": f"Error generating roadmap with Gemini: {e}"}