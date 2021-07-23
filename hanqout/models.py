from django.db import models

# Create your models here.

class Hanqout(models.Model):
    title = models.CharField(max_length=50, default=None)
    image = models.CharField(max_length=500, default=None)
    description = models.CharField(max_length=500, default=None)
    venue = models.CharField(max_length=200, default=None)
    date = models.CharField(max_length=200, default=None)
    time = models.CharField(max_length=200, default=None)
    price = models.CharField(max_length=200, default=None)
    keywords = models.CharField(max_length=200)
    worth_a_go = models.BooleanField(default=True, null=True)
    categories = models.ManyToManyField("categories.Category", related_name="hanqouts")
    locations = models.ManyToManyField("locations.Location", related_name="hanqouts")
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="hanqouts",
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"{self.title} - {self.description}"

