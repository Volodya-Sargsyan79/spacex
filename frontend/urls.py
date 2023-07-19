from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('technology', index),
    path('flightschedle', index),
    path('garaiti', index),
    path('aboutcompany', index),
    path('contacts', index),
]
