from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register((Resume, Professions, Cities, Followers, Wallet, Post, Likes, Comment))