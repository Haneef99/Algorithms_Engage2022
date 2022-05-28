from django.db import models

# Create your models here.

class Movie(models.Model):

    name = models.CharField(max_length=100)
    director = models.CharField(max_length=30)
    starring = models.CharField(max_length=200)
    imdb = models.IntegerField()
    release_year = models.IntegerField()
    language = models.CharField(max_length=30)
    genre = models.CharField(max_length=150)

    def __str__(self):
        return self.name