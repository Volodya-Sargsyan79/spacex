from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length=20)
    link = models.CharField(max_length=20)


class Traveling(models.Model):
    name = models.CharField(max_length=20)
    we = models.IntegerField()
    guarantee = models.IntegerField()
    date = models.DateField()
    days = models.IntegerField()