from django.urls import path
from . import views

urlpatterns = [
    path('menu', views.MenuView.as_view()),
    path('traveling', views.TravelingView.as_view()),
]
