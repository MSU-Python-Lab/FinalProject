from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from . import managers


def user_directory_path(instance, filename):
    return 'user_{0}/{1}'.format(instance.user.id, filename)


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = managers.CustomUserManager()

    def __str__(self):
        return f"{self.email}'s custom account"


class UserProfile(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    bio = models.TextField()

    def __str__(self):
        return f"User profile for user {self.user.primary_key}"


class UserPhoto(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    is_avatar = models.BooleanField(default=False)
    photo = models.ImageField(upload_to=user_directory_path)

