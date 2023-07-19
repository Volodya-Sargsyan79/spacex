from rest_framework import serializers
from . import models

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Menu
        fields = ('id', 'name', 'link')


class TravelingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Traveling
        fields = ('id', 'name', 'we', 'guarantee', 'date', 'days')