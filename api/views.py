from django.shortcuts import render
from rest_framework import generics
from . import serializers
from . import models

# Create your views here.

class MenuView(generics.ListAPIView):
    queryset = models.Menu.objects.all()
    serializer_class = serializers.MenuSerializer

class TravelingView(generics.ListAPIView):
    queryset = models.Traveling.objects.all()
    serializer_class = serializers.TravelingSerializer