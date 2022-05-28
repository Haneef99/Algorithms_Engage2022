# Generated by Django 4.0.1 on 2022-05-16 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('director', models.CharField(max_length=30)),
                ('starring', models.CharField(max_length=200)),
                ('imdb', models.IntegerField()),
                ('release_year', models.IntegerField()),
                ('language', models.CharField(max_length=30)),
                ('genre', models.CharField(max_length=150)),
            ],
        ),
    ]