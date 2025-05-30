import json
from openai import OpenAI
from django.conf import settings
from .interfaces import RoadmapGeneration

class ChatGPTProvider(RoadmapGeneration):
    def __init__(self):
        api_key = settings.KEYS['OPENAI_API_KEY']
        self.client = OpenAI(api_key=api_key)
        self.models = {
            'gpt': "gpt-4o-mini",
            'embedding': "text-embedding-3-small"
        }

    def generateRoadmap(self, objective, salary):
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
Bring your response on the given format as a pure json-object format."""
        msg = [
            {"role": "user", "content": content}
        ]
        response = self.client.chat.completions.create(
            model=self.models['gpt'],
            messages=msg,
            response_format={"type": "json_object"},
            max_tokens=2000
        )
        return json.loads(response.choices[0].message.content) # Returns JSON formmated response.

    def embedObjective(self, objective):
        objective = objective.replace("\n", " ")
        return self.client.embeddings.create(input=[objective], model=self.models['embedding']).data[0].embedding