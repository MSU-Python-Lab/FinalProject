from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from . import managers


def user_directory_path(instance, filename):
    return 'user_{0}/{1}'.format(instance.user.id, filename)


class CustomUser(AbstractUser):
    username = None  # it's a login
    time_create = models.DateField(auto_now_add=True)
    last_online = models.DateField(auto_add=True)
    avatar = models.ImageField(upload_to=user_directory_path)
    email = models.EmailField(_('email address'), unique=True)
    phone = models.CharField(max_length=50)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = managers.CustomUserManager()

    def __str__(self):
        return f"{self.email}'s custom account"
