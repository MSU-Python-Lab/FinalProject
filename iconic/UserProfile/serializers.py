from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model

CustomUser = get_user_model()


# This is custom wallet serializer
class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = ('id', 'user_id', 'total_amount')


# This is custom followers serializer
class FollowersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Followers
        fields = ('user_id', 'follower')


# This is custom resume serializer
class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ('user_id', 'about_me', 'hobby', 'work_experience',
                  'achievements', 'skills', 'city', 'profession_id')


# Professions serializer
class ProfessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professions
        fields = ('name', 'id')


# Cities serializer
class CitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = ('name', 'id')


# This is custom post serializer
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'user_id', 'post_description', 'source', 'published', 'time_create')


# Serializer for Comment model
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'user_id', 'message', 'time_create', 'post_id')


# Serializer for Likes model
class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ('user_id', 'post_id')
