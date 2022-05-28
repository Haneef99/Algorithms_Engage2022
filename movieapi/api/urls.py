from django.contrib import admin
from django.urls import path,include
from . import views



urlpatterns = [
    path('' , views.movieListView.as_view()),
    path('<int:pk>/',views.movieDetailView.as_view()),
]
