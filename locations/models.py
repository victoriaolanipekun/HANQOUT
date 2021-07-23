from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"Location: {self.name}"