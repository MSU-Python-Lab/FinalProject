from django.contrib.auth.models import User
from django.db import models


# Create your models here.
def user_directory_path(instance, filename):
    return 'user_{0}/{1}'.format(instance.user.id, filename)


class UserProfile(models.Model):
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    age = models.IntegerField()
    country = models.CharField(max_length=50)
    time_create = models.DateField(auto_now_add=True)


class UserPhoto(models.Model):
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)
    photo = models.ImageField(upload_to=user_directory_path)

