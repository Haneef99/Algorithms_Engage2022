from dataclasses import field
from .models import Movie
from rest_framework import serializers

class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('name','director','starring','imdb','release_year','language','genre')