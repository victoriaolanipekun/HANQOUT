from django.db import models

# Create your models here.

class Hanqout(models.Model):
    title = models.CharField(max_length=50, default=None)
    image = models.CharField(max_length=500, default=None)
    description = models.CharField(max_length=500, default=None)
    venue = models.CharField(max_length=200, default=None)
    day = models.PositiveIntegerField(default=None)
    month = models.CharField(max_length=200, default=None)
    year = models.PositiveIntegerField(default=None)
    keywords = models.CharField(max_length=200)
    worth_a_go = models.BooleanField(default=True, null=True)
    

    def __str__(self):
        return f"{self.title} - {self.description} - {self.day.month.year}"

