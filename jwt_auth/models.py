from django.db import models
from django.contrib.auth.models import AbstractUser

# django already has password & password confirmation & usernames
# doesnt make email required so want to change that
# by defining these fields we make them required

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_image = models.CharField(max_length=300)
