from django.shortcuts import render
from rest_framework import generics
from .models import Movie
from .serializers import MovieSerializer
# Create your views here.


class movieListView(generics.ListCreateAPIView):
        queryset = Movie.objects.all()
        serializer_class = MovieSerializer


class movieDetailView(generics.RetrieveUpdateDestroyAPIView):
        queryset = Movie.objects.all()
        serializer_class = MovieSerializer
