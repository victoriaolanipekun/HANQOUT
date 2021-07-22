from django.db import models

class Comment(models.Model):
    text = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True) # will be added and saved automatically
    hanqouts = models.ForeignKey( # comments are the many, which is why the foreign key lives here
        "hanqout.Hanqout", # which model are we creating the realtionship with
        related_name="comments", # what name the field will have on the other model, comments on shows,
        on_delete= models.CASCADE # if a hanqout is deleted, also delete the comments
    )

    def __str__(self):
        return f"Comments: {self.text}"