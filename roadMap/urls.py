from django.urls import path
from . import views

urlpatterns = [
    path('home', views.home, name='home'),
    path('roadmapGenerator', views.roadmapGenerator, name='roadmapGenerator'),
]
