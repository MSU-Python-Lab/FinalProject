from django.db import models

from iconic.accounts import models as accounts_user


# Create your models here.

class Professions(models.Model):
    name = models.CharField(max_length=100)


class Cities(models.Model):
    name = models.CharField(max_length=100)


class Followers(models.Model):
    user_id = models.ManyToManyField(accounts_user.CustomUser, on_delete=models.CASCADE, related_name='user_id')
    follower = models.ManyToManyField(accounts_user.CustomUser, on_delete=models.CASCADE, related_name='follower')


class Likes(models.Model):
    user_id = models.ManyToManyField(accounts_user.CustomUser, on_delete=models.CASCADE, related_name='user_id')
    post_id = models.ManyToManyField(Post, on_delete=models.CASCADE, related_name='post_id')


class Wallet(models.Model):
    user_id = models.OneToOneField(accounts_user.CustomUser, on_delete=models.CASCADE, related_name='user_id')
    total_amount = models.IntegerField()

    def __str__(self):
        return f"wallet of {self.user_id.primary_key}"


class Post(models.Model):
    user_id = models.ForeignKey(accounts_user.CustomUser, on_delete=models.CASCADE, related_name='user_id')
    post_description = models.TextField()
    published = models.BooleanField()
    source = models.FilePathField(path=accounts_user.user_directory_path, max_length=200)
    time_create = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"post of {self.user_id.primary_key}"


class Comment(models.Model):
    user_id = models.ForeignKey(accounts_user.CustomUser, on_delete=models.CASCADE, related_name='user_id')
    message = models.CharField(max_length=200)
    time_create = models.DateTimeField(auto_now_add=True)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_id')

    def __str__(self):
        return f"comment of {self.user_id.primary_key}"


class Resume(models.Model):
    user_id = models.ForeignKey(accounts_user.CustomUser, on_delete=models.CASCADE, related_name='user_id')
    about_me = models.TextField()
    hobby = models.TextField()
    work_experience = models.TextField()
    achievements = models.TextField()
    skills = models.TextField()
    city = models.ForeignKey(Cities, on_delete=models.CASCADE, related_name='cities_id')
    profession_id = models.ForeignKey(Professions, on_delete=models.CASCADE, related_name='professions_id')

    def __str__(self):
        return f"cv of {self.user_id.primary_key}"
