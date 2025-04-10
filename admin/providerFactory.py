from .openAIManager import ChatGPTProvider
from .geminiManager import GeminiAIProvider

def get_ai_provider(name: str):
    if name == "openia":
        return ChatGPTProvider()
    elif name == "geminiia":
        return GeminiAIProvider()
    else:
        raise ValueError(f"Unknown AI provider: {name}")