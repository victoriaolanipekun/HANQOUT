from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model() # get current user model, our custom user and not Django default user

admin.site.register(User)
